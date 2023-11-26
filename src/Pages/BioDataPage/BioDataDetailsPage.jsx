import { useContext, useEffect, useState } from "react"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import SimilarBioDatas from "./SimilarBioDatas"
import { HiHeart } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import useSelfBioDataStatus from "../../hooks/getSelfBioDataStatus/useSelfBioDataStatus";
import Swal from "sweetalert2";
import usePublicAxiosHook from "../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook";
import { AuthContext } from "../../Context/FirebaseAuthContext";
// import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios";


const BioDataDetailsPage = () => {

    const { user } = useContext(AuthContext)
    const publicAxios = usePublicAxiosHook()
    const loaderData = useLoaderData()
    const [selfData] = useSelfBioDataStatus()
    const [isFav, setIsFav] = useState(false)
    // const secureAxios = useSecureAxios();
    // const publicAxios = usePublicAxiosHook()
    const [myFav,setMyFav] = useState({})


    useEffect(()=>{
        publicAxios.get(`/favourite/${user?.email}`)
        .then(res=>{
            setMyFav(res.data);
            const temp = myFav.fav?.filter(one=>one === loaderData._id);
            if(temp?.length > 0){
                setIsFav(true)
            }else{
                setIsFav(false)
            }
        })
    },[myFav,isFav])


    const handleClickAddFav = (sid) => {
        Swal.fire({
            title: "Want to make favourite ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Do it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const sendData = { bioId: sid };
                publicAxios.put(`/favourite/${user?.email}`, sendData)
                    .then(res => {
                        if (res.data.insertedId || res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Successfully Added !",
                                text: "Your operation has been done.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleClickFavDelete=(sid)=>{
        Swal.fire({
            title: "Want to remove from favourite ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const dataThatSend = {sid}
               publicAxios.patch(`/favourite?email=${user?.email}`,dataThatSend)
               .then(res=>{
                console.log(res.data);
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: "Successfully Remove !",
                        text: "Your operation has been done.",
                        icon: "success"
                    });
                }
               })
            }
        });
    }




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
                                    <HiHeart onClick={()=>handleClickFavDelete(loaderData._id)} className="text-3xl ml-3 cursor-pointer text-red-500" />
                                    :
                                    <HiHeart onClick={() => handleClickAddFav(loaderData._id)} className="cursor-pointer text-3xl ml-3" />
                            }
                        </div>
                        {
                            selfData.is_premium ?
                                <div className=" bg-slate-100 p-5 rounded-lg text-center mt-3">
                                    <h1 className=" text-lg font-semibold">Contact Info</h1>
                                    <h1>Phone : {loaderData.phone}</h1>
                                    <h1>Email : {loaderData.email}</h1>
                                </div>
                                :
                                <div className=" flex justify-center flex-col items-center mt-5">
                                    <p className=" text-red-500">Contact info is resurved for premium users only</p>
                                    <Link state={{ money: 500 }} to={'/payment'}><button className=" bg-blue-400 text-white px-5 py-2 rounded-lg mt-2">Req Contact Info</button></Link>
                                </div>
                        }
                    </div>
                </div>
                <div className=" bg-red-100 z-50 p-5 rounded-lg">
                    <SimilarBioDatas genderStatus={loaderData.gender} />
                </div>
            </div>
        </div>
    )
}

export default BioDataDetailsPage