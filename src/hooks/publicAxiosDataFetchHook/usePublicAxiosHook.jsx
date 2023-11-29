import axios from "axios"


const publicAxios = axios.create({
    baseURL: 'https://backend-side-ten.vercel.app'
})

const usePublicAxiosHook = () => {
  return publicAxios;
}

export default usePublicAxiosHook