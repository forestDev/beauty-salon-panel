import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { SET_USER } from '@/store/mutations.type'
import '@/assets/style/normalize.css'
import '@/assets/fonts/all.min.css'
import '@/assets/fonts/fonts.css'
import '@/plugins'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	created() {
		if (!this.$store.state.user && this.$cookies.isKey('beautyToken')) {
			this.$store.commit(SET_USER, this.$cookies.get('beautyToken'))
		}
	},
	render: h => h(App),
}).$mount('#app')
