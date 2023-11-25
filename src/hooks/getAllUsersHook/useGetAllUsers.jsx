import { useQuery } from '@tanstack/react-query'
import usePublicAxiosHook from '../publicAxiosDataFetchHook/usePublicAxiosHook'


const useGetAllUsers = () => {
    const publicAxios = usePublicAxiosHook();
    const { refetch ,data : allUsers = []} = useQuery({
        queryKey: ['gau'],
        queryFn: async () => {
            const res = await publicAxios.get('/users')
            return res.data
        }
    })
    return [refetch,allUsers]
}
export default useGetAllUsers