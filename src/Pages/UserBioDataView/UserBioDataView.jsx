import SectionHeader from "../../Components/SectionHeader/SectionHeader"


const UserBioDataView = () => {
  return (
    <div>
      <SectionHeader small={'view how people see your details'} big={'View Biodata'} />
      <div className="  max-w-xl mx-auto">
        <div className=" bg-pink-100 flex justify-between rounded-lg">
          <div className=" p-5">
            <h1 className="text-lg font-semibold">Name : S M Piyas Mahamude Alif</h1>
            <h1 className="text-lg font-semibold">Fathers Name : S M Piyas Mahamude Alif</h1>
            <h1 className="text-lg font-semibold">Mothers Name : S M Piyas Mahamude Alif</h1>
            <h1 className="text-lg font-semibold">Permanent Division: Dhaka</h1>
            <h1 className="text-lg font-semibold">Present Division: Dhaka</h1>
            <h1 className="text-lg font-semibold">Date of Birth: 13-05-2003</h1>
            <h1 className="text-lg font-semibold">Height : 11 Feet</h1>
            <h1 className="text-lg font-semibold">Weight : 80 KG</h1>
            <h1 className="text-lg font-semibold">Age : 80 years</h1>
            <h1 className="text-lg font-semibold">Occupation : Student</h1>
            <h1 className="text-lg font-semibold">Phone : 01315513173</h1>
            <h1 className="text-lg font-semibold">Email : piyasmahmudealif@gmail.com</h1>
            <h1 className="text-lg ">Expected Partner Weight : 80 KG</h1>
            <h1 className="text-lg ">Expected Partner Height : 78 Feet</h1>
            <h1 className="text-lg ">Expected Partner Age : 18 years</h1>
          </div>
          <div className=" h-[200px] p-5">
            <img className="h-full rounded-xl" src="https://i.ibb.co/F60MHS9/IMG-20220219-WA0053.jpg" alt="" />
            <h1 className=" mt-2">Biodata Id : 100</h1>
            <h1>Gender : Male</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBioDataView