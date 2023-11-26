import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/FirebaseAuthContext";
import { Box, CircularProgress } from "@mui/material";
import useGetAdminStatus from "../../hooks/getAdminStatusHook/useGetAdminStatus";

const AdminPrivateRoutes = ({children}) => {
  const [adminStatus,adminLoading] = useGetAdminStatus()
  const location = useLocation();
    const { user, loader } = useContext(AuthContext)

    if (loader || adminLoading) {
        return (
            <div className=" h-screen w-full flex justify-center items-center">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }
    if (user && adminStatus) {
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'} replace={true} />
}

export default AdminPrivateRoutes