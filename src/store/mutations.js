import { SET_USER } from './mutations.type'
import axios from 'axios'
import Vue from 'vue'
export default {
	setIsModal(state, isModal) {
		state.isModal = isModal
	},
	[SET_USER](state, data) {
		state.user = data
		Vue.$cookies.set('beautyToken', data)
	},
}
