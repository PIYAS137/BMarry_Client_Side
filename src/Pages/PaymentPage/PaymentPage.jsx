import { useLocation, useParams } from "react-router-dom"
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useSelfBioDataStatus from "../../hooks/getSelfBioDataStatus/useSelfBioDataStatus";
import { useContext, useEffect, useState } from "react";
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import PaymentParent from "./PaymentParent";


const PaymentPage = () => {
    const params = useParams()
    const [reqBioId, setReqBioId] = useState(params.sid)
    const [myBioId, setMyBioId] = useState(0)

    const { user } = useContext(AuthContext)
    const secureAxios = useSecureAxios()

    useEffect(() => {
        secureAxios.get(`/biodata/${user?.email}`)
            .then(res => {
                setMyBioId(res.data.biodata_id)
            })
    }, [user])


    // kaje lagbe { money, herId, myId, myEmail}




    return (
        <div>
            <SectionHeader small={'lets pay the require fees'} big={'Checkout Page'} />
            <div>
                <div action="" className=" bg-red-200 max-w-2xl mx-auto p-5 rounded-xl">
                    <h1 className=" py-1 text-2xl font-semibold text-center mb-5">Payment Details</h1>
                    <div className="mb-3">
                        <span>Request Persons Biodata Id</span>
                        <input defaultValue={reqBioId} type="text" className="block w-full border border-pink-200 px-3 py-1 rounded-lg text-lg" disabled />
                    </div>
                    <div className="mb-3">
                        <span>My Biodata Id</span>
                        <input type="text" className="block w-full border border-pink-200 px-3 py-1 rounded-lg text-lg" defaultValue={myBioId > 0 ? myBioId : ''} disabled />
                    </div>
                    <div className="mb-3">
                        <span>My Email Address</span>
                        <input type="text" className="block w-full border border-pink-200 px-3 py-1 rounded-lg text-lg" defaultValue={user?.email} disabled />
                    </div>
                    <div className="w-full mt-2 max-w-xl mx-auto">
                        <PaymentParent myBioId={myBioId} reqBioId={reqBioId}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentPage