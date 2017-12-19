module.exports = (app, db) => {
	app.get('/aboutswop', (req, res) => {
			res.render('aboutswop')
	})
}