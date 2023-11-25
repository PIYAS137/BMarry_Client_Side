import { useContext, useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios"
import { AuthContext } from "../../Context/FirebaseAuthContext";


const UserBioDataView = () => {

  const {user} = useContext(AuthContext)
  const [User_Data,setUser_Data] = useState({})

  const secureAxios = useSecureAxios();

  useEffect(()=>{
    secureAxios.get(`/biodata/${user?.email}`)
    .then(res=>{
      setUser_Data(res.data)
    })
  },[user])
  console.log(User_Data);




  return (
    <div>
      <SectionHeader small={'view how people see your details'} big={'View Biodata'} />
      <div className="  max-w-2xl mx-auto">
        <div className=" bg-pink-100 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start rounded-lg">
          <div className=" p-5">
            <h1 className="text-lg font-semibold">Name : {User_Data.name}</h1>
            <h1 className="text-lg font-semibold">Fathers Name : {User_Data?.father_name}</h1>
            <h1 className="text-lg font-semibold">Mothers Name : {User_Data.mother_name}</h1>
            <h1 className="text-lg font-semibold">Permanent Division: <span className=" capitalize">{User_Data.parmanent_address}</span></h1>
            <h1 className="text-lg font-semibold">Present Division: <span className=" capitalize">{User_Data.present_address}</span></h1>
            <h1 className="text-lg font-semibold">Date of Birth: {User_Data.birth}</h1>
            <h1 className="text-lg font-semibold">Height : <span className=" capitalize">{User_Data.height}</span></h1>
            <h1 className="text-lg font-semibold">Weight : <span className=" capitalize">{User_Data.weight}</span></h1>
            <h1 className="text-lg font-semibold">Age : {User_Data.age} years</h1>
            <h1 className="text-lg font-semibold">Occupation : <span className=" capitalize">{User_Data.occupation}</span></h1>
            <h1 className="text-lg font-semibold">Phone : {User_Data.phone}</h1>
            <h1 className="text-lg font-semibold">Email : {User_Data.email}</h1>
            <h1 className="text-lg ">Expected Partner Weight : <span className=" capitalize">{User_Data.expected_weight}</span></h1>
            <h1 className="text-lg ">Expected Partner Height : <span className=" capitalize">{User_Data.expected_height}</span></h1>
            <h1 className="text-lg ">Expected Partner Age : {User_Data.expected_age} years</h1>
          </div>
          <div className=" h-[200px] p-5 mb-10">
            <img className=" h-full rounded-xl" src={User_Data.biodata_image} alt="" />
            <h1 className=" font-semibold mt-2">Biodata Id : {User_Data.biodata_id}</h1>
            <h1 className="font-semibold ">Gender : <span className=" capitalize">{User_Data.gender}</span></h1>
          </div>
        </div>
        <div className=" flex  justify-center">
          <button className=" py-3 px-5 bg-blue-400 rounded-lg text-white mt-3">Make Biodata To Premium</button>
        </div>
      </div>
    </div>
  )
}

export default UserBioDataView