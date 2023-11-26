import { useQuery } from '@tanstack/react-query'
import useSecureAxios from '../secureAxiosDataFetchHook/useSecureAxios'
import { useContext } from 'react'
import { AuthContext } from '../../Context/FirebaseAuthContext'


const useGetAllUsers = () => {
    const secureAxios = useSecureAxios()
    const {user,loader} = useContext(AuthContext)
    
    const { refetch ,data : allUsers = []} = useQuery({
        queryKey: ['gau'],
        enabled: !loader,
        queryFn: async () => {
            const res = await secureAxios.get(`/users/${user?.email}`)
            return res.data
        }
    })
    return [refetch,allUsers]
}
export default useGetAllUsers