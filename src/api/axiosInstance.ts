import axios from 'axios'
import { BASE_URL } from '../constants/constants'

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: false,
})

axiosInstance.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers.Authorization = `Token ${token}`
	}
	return config
})

export default axiosInstance
