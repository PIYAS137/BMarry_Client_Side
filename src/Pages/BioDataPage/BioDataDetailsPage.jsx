import { useContext, useEffect, useState } from "react"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import SimilarBioDatas from "./SimilarBioDatas"
import { HiHeart } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import { useQuery } from "@tanstack/react-query";


const BioDataDetailsPage = () => {

    const secureAxios = useSecureAxios();
    const {user,loader}=useContext(AuthContext)
    const loaderData = useLoaderData()

    const [isFav, setIsFav] = useState(true)


    const {data : selfData = {}} =useQuery({
        queryKey: ['getOwnInfo'],
        enabled: !loader,
        queryFn: async()=>{
            const res = await secureAxios.get(`/selfStatus?email=${user?.email}`)
            return res.data
        }
    })

    return (
        <div className="w-full">
            <div>
                <SectionHeader small={"see all about a user"} big={"User Biodata Details"} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
                <div className=" py-10 sticky top-5 ">
                    <div className=" h-[300px] flex justify-center mb-5 ">
                        <img className="h-full rounded-lg" src={loaderData.biodata_image} alt="" />
                    </div>
                    <div className=" flex flex-col items-center">
                        <h1 className=" text-lg font-semibold">{loaderData.name}</h1>
                        <h1>Age : {loaderData.age}</h1>
                        <h1>Gender : <span className=" capitalize">{loaderData.gender}</span></h1>
                        <h1>Occupation : <span className=" capitalize">{loaderData.occupation}</span></h1>
                        <h1>Permanent Division : {loaderData.parmanent_address}</h1>
                        <h1>Present Division : {loaderData.present_address}</h1>
                        <div className="flex justify-center items-center">
                            <p className=" text-xl my-3">Make Favourite</p>
                            {
                                isFav ?
                                    <HiHeart className="text-3xl ml-3 text-red-500" />
                                    :
                                    <HiHeart className="text-3xl ml-3" />
                            }
                        </div>
                        {
                            selfData.is_premium                            ?
                                <div className=" bg-slate-100 p-5 rounded-lg text-center mt-3">
                                    <h1 className=" text-lg font-semibold">Contact Info</h1>
                                    <h1>Phone : {loaderData.phone}</h1>
                                    <h1>Email : {loaderData.email}</h1>
                                </div>
                                :
                                <div className=" flex justify-center flex-col items-center mt-5">
                                    <p className=" text-red-500">Contact info is resurved for premium users only</p>
                                    <Link state={{money:500}} to={'/payment'}><button className=" bg-blue-400 text-white px-5 py-2 rounded-lg mt-2">Req Contact Info</button></Link>
                                </div>
                        }
                    </div>
                </div>
                <div className=" bg-red-100 z-50 p-5 rounded-lg">
                    <SimilarBioDatas />
                </div>
            </div>
        </div>
    )
}

export default BioDataDetailsPage