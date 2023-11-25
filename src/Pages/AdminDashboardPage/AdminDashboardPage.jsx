import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import { FaFemale } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaDharmachakra } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import AdminStatistics from "../../Components/AdminStatistics/AdminStatistics";

const AdminDashboardPage = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <SectionHeader small={'welcome to admin dashboard'} big={'Admin Dashboard'} />
      <div className=" flex justify-center ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center space-x-5 space-y-5">
        <div className=" bg-pink-500 max-w-sm rounded-xl p-5">
          <div className=" flex justify-center">
            <FaUsers className=" text-4xl my-4 text-white" />
          </div>
          <h1 className=" text-2xl font-semibold text-center text-white">Total Biodata Count</h1>
          <h1 className=" text-white text-5xl my-1 font-bold text-center">300</h1>
          <h1 className=" text-center text-white">Male + Female </h1>
        </div>

        <div className=" bg-yellow-500 max-w-sm rounded-xl p-5">
          <div className=" flex justify-center">
            <FaUser className=" text-3xl my-4" />
          </div>
          <h1 className=" text-2xl font-semibold text-center text-black">Total Male BioData Count</h1>
          <h1 className=" text-black text-5xl my-1 font-bold text-center">300</h1>
          <h1 className=" text-center text-black">Male Account </h1>
        </div>

        <div className=" bg-pink-300 max-w-sm rounded-xl p-5">
          <div className=" flex justify-center">
            <FaFemale className=" text-3xl my-4" />
          </div>
          <h1 className=" text-2xl font-semibold text-center text-black">Total Female Biodata Count</h1>
          <h1 className=" text-black text-5xl my-1 font-bold text-center">300</h1>
          <h1 className=" text-center text-black"> Female Account</h1>
        </div>
        <div className=" bg-blue-300 max-w-sm rounded-xl p-5">
          <div className=" flex justify-center">
            <FaDharmachakra className=" text-3xl my-4" />
          </div>
          <h1 className=" text-2xl font-semibold text-center text-black">Total Premium Biodata</h1>
          <h1 className=" text-black text-5xl my-1 font-bold text-center">300</h1>
          <h1 className=" text-center text-black">Premeum Accont </h1>
        </div>
        <div className=" bg-purple-400 max-w-sm rounded-xl p-5">
          <div className=" flex justify-center">
            <FaMoneyBillAlt className=" text-3xl my-4" />
          </div>
          <h1 className=" text-2xl font-semibold text-center text-black">Total Revenue Count</h1>
          <h1 className=" text-black text-5xl my-1 font-bold text-center">300$</h1>
          <h1 className=" text-center text-black">Total Money</h1>
        </div>

      </div>
      </div>
      <div>
        <AdminStatistics/>
      </div>
    </div>
  )
}

export default AdminDashboardPage