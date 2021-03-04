/* eslint-disable no-console */
import { API_ADDRESS, API_TIMEOUT } from '@/config'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.timeout = API_TIMEOUT
axios.defaults.withCredentials = true

axios.interceptors.response.use(
	response => response.data,
	error => {
		if (!error.response) {
			// Network issues.
			console.log('axios 1')
			console.log(error)
		} else if (error.response.status >= 500) {
			// Server problem.
			console.log('axios 2')
			console.log(error)
		} else {
			// Other error.
			console.log('axios 3')
			console.log(error)
		}
		// Validation errors.
		const errors = error.response?.data?.errors || {}
		return Promise.reject(errors)
	}
)

export default axios
