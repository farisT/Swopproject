module.exports = (app, db) => {
	app.get('/howitworks', (req, res) => {
			res.render('howitworks')
	})
}