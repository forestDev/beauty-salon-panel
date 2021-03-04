export default (to, from, next) => {
	if (to.name !== 'loginPage' && !$cookies.isKey('beautyToken')) {
		console.info('user unauthorized')
		return next({ name: 'loginPage' })
	}
	next()
}
