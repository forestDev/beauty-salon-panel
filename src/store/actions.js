import { LOGIN_USER, LOGOUT_USER, READ_FINANCES } from './actions.type'
import api from '@/api'
export default {
	async [LOGOUT_USER](context, token) {
		await api.post('/user/logout', { token })
	},
	async [LOGIN_USER](context, loginData) {
		const data = await api.post('/user/login', loginData)
		return data
	},
	async [READ_FINANCES](context) {
		const data = await api.get('/finance/getall')
	},
}
