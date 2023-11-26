import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import useSecureAxios from "../secureAxiosDataFetchHook/useSecureAxios"
import { useContext } from "react"

const useSelfBioDataStatus = () => {

    const {user,loader} = useContext(AuthContext)
    const secureAxios = useSecureAxios()

    const {data : selfData = {}} =useQuery({
        queryKey: ['getOwnInfo'],
        enabled: !loader,
        queryFn: async()=>{
            const res = await secureAxios.get(`/selfStatus?email=${user?.email}`)
            return res.data
        }
    })
    return [selfData]
}

export default useSelfBioDataStatus