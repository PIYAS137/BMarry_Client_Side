import { FaMoneyBillAlt, FaUsers } from "react-icons/fa"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"
import { useContext } from "react"
import useSecureAxios from "../../hooks/secureAxiosDataFetchHook/useSecureAxios"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import { useQuery } from "@tanstack/react-query"


const UserDashboard = () => {

  const secureAxios = useSecureAxios();
  const { user, loader } = useContext(AuthContext);

  const { data: selfSummary = {} } = useQuery({
    queryKey: ['userSummaryInfo'],
    enabled: !loader,
    queryFn: async () => {
      const res = await secureAxios.get(`/userSummary/${user?.email}`)
      return res.data;
    }
  })




  return (
    <div>
      <SectionHeader small={'check all about your account'} big={'User Dashboard'} />
      <div className=" max-w-5xl mx-auto">
        <h1 className="text-center my-5 font-semibold text-purple-600">Welcome to Dashboard, {user?.displayName}</h1>
        <div className="flex flex-col items-center ">
          <div className=" bg-pink-500 max-w-sm rounded-xl p-5 w-full mb-5">
            <div className=" flex justify-center">
              <FaUsers className=" text-4xl my-3 text-white" />
            </div>
            <h1 className=" text-2xl font-semibold text-center text-white">Total Requst Send</h1>
            <h1 className=" text-white text-5xl my-1 font-bold text-center">{selfSummary?.totalReq}</h1>
            <h1 className=" text-center text-white">Total request </h1>
          </div>
          <div className=" bg-purple-600 max-w-sm rounded-xl p-5 w-full">
            <div className=" flex justify-center">
              <FaMoneyBillAlt className="text-white text-4xl my-3" />
            </div>
            <h1 className=" text-2xl font-semibold text-center text-white">Total Spent In This Website</h1>
            <h1 className=" text-white text-5xl my-1 font-bold text-center">${selfSummary?.totalSpent}</h1>
            <h1 className=" text-center text-white">For req spent</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserDashboard