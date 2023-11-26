import { useContext } from "react"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import { Box, CircularProgress } from "@mui/material"
import { Navigate, useLocation } from "react-router-dom"

const UserPrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return (
            <div className=" h-screen w-full flex justify-center items-center">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'} replace={true} />
}

export default UserPrivateRoutes