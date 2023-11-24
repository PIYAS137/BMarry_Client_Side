import { useState } from "react"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import SimilarBioDatas from "./SimilarBioDatas"
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";


const BioDataDetailsPage = () => {

    const [isOk, setIsOk] = useState(false)
    const [isFav, setIsFav] = useState(true)


    return (
        <div className="w-full">
            <div>
                <SectionHeader small={"see all about a user"} big={"User Biodata Details"} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
                <div className=" py-10 sticky top-5 ">
                    <div className=" h-[300px] flex justify-center mb-5 ">
                        <img className="h-full rounded-lg" src="https://i.ibb.co/F60MHS9/IMG-20220219-WA0053.jpg" alt="" />
                    </div>
                    <div className=" flex flex-col items-center">
                        <h1 className=" text-lg font-semibold">Piyas Mahamude Alif</h1>
                        <h1>Age : 22</h1>
                        <h1>Gender : Male</h1>
                        <h1>Occupation : Student</h1>
                        <h1>Permanent Division : Dhaka</h1>
                        <h1>Present Division : Dhaka</h1>
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
                            isOk ?
                                <div className=" bg-slate-100 p-5 rounded-lg text-center mt-3">
                                    <h1 className=" text-lg font-semibold">Contact Info</h1>
                                    <h1>Phone : 01315513173</h1>
                                    <h1>Email : piyasmahmudealif@gmail.com</h1>
                                </div>
                                :
                                <div className=" flex justify-center flex-col items-center mt-5">
                                    <p className=" text-red-500">Contact info is resurved for premium users only</p>
                                    <Link state={{money:500}} to={'/payment'}><button className=" bg-blue-400 text-white px-5 py-2 rounded-lg mt-2">Req Contact Info</button></Link>
                                </div>
                        }
                    </div>
                </div>
                <div className=" bg-red-100 p-5 rounded-lg">
                    <SimilarBioDatas />
                </div>
            </div>
        </div>
    )
}

export default BioDataDetailsPage