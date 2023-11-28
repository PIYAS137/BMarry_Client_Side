import { useQuery } from "@tanstack/react-query"
import SectionHeader from "../SectionHeader/SectionHeader"
import SuccessStoryCard from "./SuccessStoryCard"
import usePublicAxiosHook from "../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook"


const arr = [1, 2, 3, 4]

const SuccessStorySection = () => {

    const publicAxios = usePublicAxiosHook()

    const {data : allData = []} = useQuery({
        queryKey : ['storeSuccessAll'],
        queryFn : async ()=>{
            const res = await publicAxios.get('/filterSuccess');
            return res.data;
        }
    })





    return (
        <div>
            <SectionHeader small={'our best success storys'} big={'Success Storys'} />
            <div className=" flex flex-wrap justify-center sm:justify-between items-center">
                {
                    allData?.map((one)=><SuccessStoryCard key={one._id} data={one}/>)
                }
            </div>
        </div>
    )
}

export default SuccessStorySection