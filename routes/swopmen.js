module.exports = (app, db) => {
	app.get('/swopmen', (req, res) => {
			res.render('swopmen')
	})
}