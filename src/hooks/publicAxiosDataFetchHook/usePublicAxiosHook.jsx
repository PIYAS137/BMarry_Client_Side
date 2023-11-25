import axios from "axios"


const publicAxios = axios.create({
    baseURL: 'http://localhost:5022'
})

const usePublicAxiosHook = () => {
  return publicAxios;
}

export default usePublicAxiosHook