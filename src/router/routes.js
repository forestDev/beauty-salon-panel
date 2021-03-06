import LoginPage from '@/views/LoginPage'
import MainPage from '@/views/MainPage'
import Finance from '@/views/Finance'
import Clients from '@/views/Clients'
import FinanceContent from '@/components/FinanceContent'
import FinanceSummary from '@/components/FinanceSummary'
import Treatments from '@/views/Treatments'
import CalendarPage from '@/views/CalendarPage'
const routes = [
	{
		path: '/auth',
		name: 'loginPage',
		component: LoginPage,
		alias: '/logowanie',
	},
	{
		name: 'mainPage',
		path: '/',
		component: MainPage,
	},
	{
		path: '/finance',
		component: Finance,
		children: [
			{
				path: '/content',
				name: 'financeContent',
				component: FinanceContent,
				alias: '/finanse',
			},
			{
				path: '/summary',
				name: 'financeSummary',
				component: FinanceSummary,
				alias: '/podsumowanie',
			},
			
		],
	},
	{
		name: 'mainPage',
		path: '/',
		component: MainPage,
	},
	{
		path: '/treatments',
		name: 'treatments',
		component: Treatments,
		alias: '/usługi',
	},
	{
		path: '/clients',
		name: 'Clients',
		component: Clients,
		alias: '/baza-klientów'
	},
	{
		path: '/calendar',
		name: "calendar",
		component: CalendarPage,
		alias: '/terminarz'
	}
	
]

export default routes
