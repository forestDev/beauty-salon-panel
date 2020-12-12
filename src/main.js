import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/normalize.css'
import '@/assets/fonts/all.min.css'
import '@/assets/fonts/fonts.css'
import '@/plugins'


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
