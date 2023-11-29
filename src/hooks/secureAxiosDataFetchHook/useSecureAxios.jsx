import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../Context/FirebaseAuthContext"
import { useNavigate } from "react-router-dom"


const secureAxios = axios.create({
  baseURL: 'https://backend-side-ten.vercel.app'
})

const useSecureAxios = () => {

  const { Firebase_Logout_User } = useContext(AuthContext);
  const navigate = useNavigate();

  secureAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error)
  })

  secureAxios.interceptors.response.use(function (response) {
    return response
  }, async (error) => {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      await Firebase_Logout_User();
      navigate('/login');
    }
    return Promise.reject(error)
  })

  return secureAxios;
}

export default useSecureAxios