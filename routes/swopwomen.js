module.exports = (app, db) => {
	app.get('/swopwomen', (req, res) => {
			res.render('swopwomen')
	})
}