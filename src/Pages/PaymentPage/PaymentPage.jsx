import { useLocation } from "react-router-dom"
import SectionHeader from "../../Components/SectionHeader/SectionHeader";


const PaymentPage = () => {

    const location = useLocation()
    const moneyForPayment = location.state.money;


    return (
        <div>
            <SectionHeader small={'lets pay the require fees'} big={'Checkout Page'} />
            <div>
                <form action="" className=" bg-red-300 max-w-2xl mx-auto p-5 rounded-xl">
                    <h1 className=" py-2 text-2xl font-semibold text-center mb-5">Payment Form</h1>
                    <div className="mb-3">
                        <span>Request Persons Biodata Id</span>
                        <input type="text" className="block w-full border border-gray-500 px-2 py-1 rounded-lg text-lg" value={'1234567'} disabled />
                    </div>
                    <div className="mb-3">
                        <span>My Biodata Id</span>
                        <input type="text" className="block w-full border border-gray-500 px-2 py-1 rounded-lg text-lg" value={'1234567'} disabled />
                    </div>
                    <div className="mb-3">
                        <span>My Email Address</span>
                        <input type="text" className="block w-full border border-gray-500 px-2 py-1 rounded-lg text-lg" value={'piyasmahmudealif@gmail.com'} disabled />
                    </div>
                    <div className="w-full h-[100px] mt-2 bg-red-600">
                    STRIPE
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentPage