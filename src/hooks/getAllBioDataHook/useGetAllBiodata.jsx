import { useQuery } from '@tanstack/react-query'
import useSecureAxios from '../secureAxiosDataFetchHook/useSecureAxios'

const useGetAllBiodata = () => {
    const secureAxios = useSecureAxios();
  const {data : allBioDatas = [],refetch} = useQuery({
    queryKey : ['allBioData'],
    queryFn: async()=>{
        const res = await secureAxios.get('/biodatas')
        return res.data;
    }
  })
  return [allBioDatas,refetch]
}

export default useGetAllBiodata