import { FaMoneyBillAlt, FaUsers } from "react-icons/fa"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"


const UserDashboard = () => {
  return (
    <div>
      <SectionHeader small={'check all about your account'} big={'User Dashboard'} />
      <div className=" max-w-5xl mx-auto">
        <h1 className="text-center my-5 font-semibold text-purple-600">Welcome, S M Piyas Mahamude Alif</h1>
        <div className="flex flex-col items-center ">
          <div className=" bg-pink-500 max-w-sm rounded-xl p-5 w-full mb-5">
            <div className=" flex justify-center">
              <FaUsers className=" text-4xl my-3 text-white" />
            </div>
            <h1 className=" text-2xl font-semibold text-center text-white">Total Requst Send</h1>
            <h1 className=" text-white text-5xl my-1 font-bold text-center">300</h1>
            <h1 className=" text-center text-white">Total request </h1>
          </div>


          <div className=" bg-purple-600 max-w-sm rounded-xl p-5 w-full">
            <div className=" flex justify-center">
              <FaMoneyBillAlt className="text-white text-3xl my-4" />
            </div>
            <h1 className=" text-2xl font-semibold text-center text-white">Total Spent In This Website</h1>
            <h1 className=" text-white text-5xl my-1 font-bold text-center">300$</h1>
            <h1 className=" text-center text-white">For req spent</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserDashboard