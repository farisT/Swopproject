module.exports = (app) => {
	app.get('/subscription', (req, res) => {
			res.render('subscription')
	})

	app.post('/subscriptionRoute', (req, res)=> {
		console.log(req.body.button)
		// res.send('got to here')
		res.render('signup', {
			subscription: req.body.button
		})
	})
}