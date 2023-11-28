import { useQuery } from "@tanstack/react-query"
import usePublicAxiosHook from "../publicAxiosDataFetchHook/usePublicAxiosHook"

const useGetSixPremiumCard = () => {

    const publicAxios = usePublicAxiosHook()

  const {data : getPremiumSix=[]} = useQuery({
    queryKey : ['getPremiumSix'],
    queryFn : async()=>{
        const res = await publicAxios.get('/premiumSix')
        return res.data;
    }
  })
  return [getPremiumSix];
}

export default useGetSixPremiumCard