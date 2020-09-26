import LoginPage from '@/views/LoginPage'
import MainPage from '@/views/MainPage'
import Finance from '@/views/Finance'
import FinanceEarnings from '@/components/FinanceEarnings'
import FinanceExpenses from '@/components/FinanceExpenses'
import FinanceSummary from '@/components/FinanceSummary'
import Treatments from '@/views/Treatments'
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
	},
	{
		path: '/finance',
		component: Finance,
		alias: '/finanse',
		children: [
			{
				path: '/earnings',
				name: 'financeEarnings',
				component: FinanceEarnings,
				alias: '/przychody',
			},
			{
				path: '/expenses',
				name: 'financeExpenses',
				component: FinanceExpenses,
				alias: '/wydatki',
			},
			{
				path: '/summary',
				name: 'financeSummary',
				component: FinanceSummary,
				alias: '/podsumowanie',
			},
			// {
			// 	path: '/finance-expenses',
			// 	name: 'financeExpenses',
			// 	component: FinanceExpenses,
			// 	alias: '/wydatki',
			// },
		],
	},
	{
		path: '/treatments',
		name: 'treatments',
		component: Treatments,
		alias: '/usługi',
	},
]

export default routes
