module.exports = (app) => {
	app.get('/howitworks', (req, res) => {
			res.render('howitworks')
	})
}