import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useContext, useEffect, useState } from "react";
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = ({ reqBioId, myBioId }) => {
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const secureAxios = useSecureAxios()
    const [error, setError] = useState('')
    const [reqInfo,setReqInfo] = useState({})
    const [userClientSecret, setUserClientSecret] = useState('')
    const priceThatSend = { price: 500 };
    const navigate = useNavigate()

    useEffect(() => {
        secureAxios.post(`/payment-intent`, priceThatSend)
            .then(res => {
                setUserClientSecret(res.data.clientSecret.client_secret);
            })
    }, [user])

    useEffect(()=>{
        secureAxios.get(`/biodataById/${reqBioId}`)
        .then(res=>{
            setReqInfo(res.data);
        })
    },[])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card })
        if (error) {
            console.log('Payment Error ', error);
            setError(error.message)
        } else {
            console.log('Payment Method ', paymentMethod);
            setError('')
        }

        const { error: confirmPaymentError, paymentIntent } = await stripe.confirmCardPayment(userClientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'default_user',
                    name: user?.displayName || 'default_user'
                }
            }
        })
        if (confirmPaymentError) {
            console.log(confirmPaymentError.message);
            setError(confirmPaymentError.message)
        } else {
            setError('')
            if (paymentIntent.status === "succeeded") {
                const paymentData = {
                    name : user?.displayName,
                    userBioId : myBioId,
                    email: user?.email,
                    requestedBiodataId: parseInt(reqBioId),
                    requestedBiodataName: reqInfo.name,
                    requestedBiodataPhone : reqInfo.phone,
                    requestedBiodataEmail : reqInfo.email,
                    transactionId: paymentIntent.id,
                    status: false
                }
                secureAxios.post(`/paymentReq`, paymentData)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Payment Successfull",
                                text: `Transaction ID : ${paymentIntent.id}`,
                                icon: "success"
                            });
                            navigate(-1)
                        }
                        if (res.data.message === 'AlreadyAdded') {
                            Swal.fire({
                                title: "Allready Added",
                                text: 'You cant add same item twice !',
                                icon: "warning"
                            });
                            navigate(-1)
                        }
                    })




                // Swal.fire({
                //     title: "Payment Successfull",
                //     text: `Transaction ID : ${paymentIntent.id}`,
                //     icon: "success"
                //   });
            }
        }
    }

    return (
        <>
            <form className=" my-10 rounded-xl border border-pink-300 bg-pink-100 p-5 space-y-2" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'gray',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe} className=" bg-blue-500 text-white px-5 rounded-lg uppercase py-1" type="submit" >
                    Pay
                </button>
                {error && <p className=" italic text-red-500 font-semibold">{error}!</p>}
                {/* {transactionId && <p className=" italic text-green-700 font-semibold"><span className=" font-black">Your Transaction id :</span> {transactionId}!</p>} */}
            </form>
        </>
    )
}

export default CheckOutForm