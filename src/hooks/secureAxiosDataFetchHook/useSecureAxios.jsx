import axios from "axios"


const secureAxios = axios.create({
    baseURL: 'http://localhost:5022'
})

const useSecureAxios = () => {
  return secureAxios;
}

export default useSecureAxios