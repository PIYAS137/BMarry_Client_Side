import SectionHeader from "../SectionHeader/SectionHeader"
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import useGetAllUsers from "../../hooks/getAllUsersHook/useGetAllUsers";
import { HiMiniUsers } from "react-icons/hi2";


const SuccessCounter = () => {
  const [refetch, allSummary] = useGetAllUsers();

  return (
    <div>
      <SectionHeader small={'our community overview'} big={'Success Counter'} />
      <div className=" p-10 flex flex-wrap space-x-5 gap-5 md:gap-0
      ">

        <div className="p-5 rounded-lg flex-1 bg-purple-400">
          <HiMiniUsers className=" text-4xl lg:absolute" />
          <h1 className=" text-lg font-bold text-center">Total Biodatas</h1>
          <p className=" text-5xl font-bold text-center">{allSummary.total_biodata_count}</p>
          <small className=" text-center block mt-2">Active Biodatas</small>
        </div>

        <div className="p-5 rounded-lg flex-1 bg-yellow-400">
          <FcBusinessman className=" text-5xl lg:absolute" />
          <h1 className=" text-lg font-bold text-center">Boys Biodatas</h1>
          <p className=" text-5xl font-bold text-center">{allSummary.male_biodata_count}</p>
          <small className=" text-center block mt-2">Active Biodatas</small>
        </div>

        <div className="p-5 rounded-lg flex-1 bg-pink-200">
          <FcBusinesswoman className=" text-5xl lg:absolute" />
          <h1 className=" text-lg font-bold text-center text-pink-500">Girls Biodatas</h1>
          <p className=" text-5xl font-bold text-center text-pink-500">{allSummary.female_biodata_count}</p>
          <small className=" text-center block mt-2 text-pink-500">Active Biodatas</small>
        </div>

        <div className="p-5 rounded-lg flex-1 bg-green-600 ">
          <FcLike className=" text-5xl lg:absolute" />
          <h1 className=" text-lg font-bold text-center text-white">Success Story</h1>
          <p className=" text-5xl font-bold text-center text-white">{allSummary.success_story}</p>
          <small className=" text-center block mt-2 text-white">Already Done</small>
        </div>
      </div>
    </div>
  )
}

export default SuccessCounter;