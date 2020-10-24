import { LOGIN_USER, LOGOUT_USER } from './actions.type'
import api from '@/api'
export default {
	async [LOGOUT_USER](context, token) {
		await api.post('/user/logout', { token })
	},
	async [LOGIN_USER](context, loginData) {
		let data = await api.post('/user/login', loginData)
		return data
	},
}
