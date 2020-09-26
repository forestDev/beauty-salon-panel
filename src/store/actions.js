import { LOGIN_USER, LOGOUT_USER } from './actions.type'

export default {
	async [LOGOUT_USER](context, data) {
		console.log(data)
	},
	async [LOGIN_USER](context, data) {
		console.log(data)
	},
}
