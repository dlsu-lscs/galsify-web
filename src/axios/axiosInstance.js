import axios from 'axios'

const axiosInstance = axios.create({
    ...axios.defaults,
    baseURL: import.meta.env.VITE_API_URL || '//127.0.0.1:3000'
})

export default axiosInstance
