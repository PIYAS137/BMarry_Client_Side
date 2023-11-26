import { useQuery } from "@tanstack/react-query"
import useSecureAxios from "../secureAxiosDataFetchHook/useSecureAxios"
import { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import usePublicAxiosHook from "../publicAxiosDataFetchHook/usePublicAxiosHook";

const useGetAdminStatus = () => {
  
    const secureAxios = useSecureAxios();
    const publicAxios = usePublicAxiosHook()
    const {user, loader} = useContext(AuthContext);

    const { data : adminStatus , isPending : adminLoading} = useQuery({
        queryKey: ['getAdminStatus',user?.email],
        enabled: !loader,
        queryFn : async ()=>{
            const res = await secureAxios.get(`/user/admin/${user.email}`);
            return res.data.admin;
        }
    })
    return [adminStatus,adminLoading];
}

export default useGetAdminStatus