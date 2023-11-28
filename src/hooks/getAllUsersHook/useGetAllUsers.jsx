import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../Context/FirebaseAuthContext'
import usePublicAxiosHook from '../publicAxiosDataFetchHook/usePublicAxiosHook'

const useGetAllUsers = () => {
    const publicAxios = usePublicAxiosHook()
    const { loader } = useContext(AuthContext)

    const { refetch, data: allSummary = {} } = useQuery({
        queryKey: ['getStatistics'],
        enabled: !loader,
        queryFn: async () => {
            try {
                const res = await publicAxios.get('/getStatistics');
                return res.data;
            } catch (error) {
                throw new Error(`Error fetching statistics: ${error}`);
            }
        }
    })

    return [refetch, allSummary]
}

export default useGetAllUsers