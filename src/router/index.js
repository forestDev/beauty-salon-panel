import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import guards from '@/router/guards'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach(guards.auth)

export default router
