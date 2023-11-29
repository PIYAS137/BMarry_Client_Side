import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import usePublicAxiosHook from "../../hooks/publicAxiosDataFetchHook/usePublicAxiosHook";

const SimilarBioDatas = ({ genderStatus }) => {

    const publicAxios = usePublicAxiosHook()
    const { data: similarDatas = [] } = useQuery({
        queryKey: ['similarDataInfo'],
        queryFn: async () => {
            const res = await publicAxios.get(`/similar?gender=${genderStatus}`)
            return res.data;
        }
    })


    return (
        <div className="">
            <div className="">
                <h1 className=" text-2xl text-center font-semibold">Similar Biodatas</h1>
                <hr className="bold bg-red-300 h-[2px] my-5" />
                <div>
                    {
                        similarDatas?.map((one) => {
                            return (
                                <div key={one._id} className=" flex mb-2 items-center space-x-5 w-full
                            ">

                                    <div className="w-[120px] object-cover rounded-lg overflow-hidden">
                                        <img className=" h-full" src={one.biodata_image} alt="" />
                                    </div>
                                    <div>
                                        <p className=" font-semibold">Name : {one.name}</p>
                                        <p className=" font-semibold">Age : {one.age}</p>
                                        <p className=" font-semibold">Occupation : <span className=" capitalize">{one.occupation}</span></p>
                                        <p className=" font-semibold">Permanent Division : {one.parmanent_address}</p>
                                    </div>
                                    <div className="flex-1  flex justify-end">
                                        <Link to={`/biodatas/${one._id}`}>
                                            <button className=" bg-blue-400 text-white px-5 py-2 rounded-lg">View Profile</button>
                                        </Link>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SimilarBioDatas