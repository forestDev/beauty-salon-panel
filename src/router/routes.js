import LoginPage from '@/views/LoginPage'
import MainPage from '@/views/MainPage'
const routes = [
	{
		path: '/auth',
		name: 'loginPage',
		component: LoginPage,
		alias: '/logowanie',
	},
	{
		path: '/',
		name: 'mainPage',
		component: MainPage,
		alias: '/',
	},
]

export default routes
