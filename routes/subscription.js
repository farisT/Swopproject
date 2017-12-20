module.exports = (app) => {
	app.get('/subscription', (req, res) => {
			res.render('subscription')
	})
}