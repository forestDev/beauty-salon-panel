import { LOGIN_USER, LOGOUT_USER, READ_FINANCES } from './actions.type'
import { SET_USER } from './mutations.type'
import api from '@/api'
export default {
	async [LOGOUT_USER](context, token) {
		await api.post('/user/logout', { token })
	},
	async [LOGIN_USER]({ commit }, loginData) {
		try {
			const data = await api.post('/user/login', loginData)
			// Data contain only token
			commit(SET_USER, data)
		} catch (err) {
			console.log(err)
			return err
		}
	},
	async [READ_FINANCES](context) {
		const data = await api.get('/finance/getall')
	},
}
