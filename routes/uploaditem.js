module.exports = (app, db) => {
	app.get('/uploaditem', (req, res) => {
			res.render('uploaditem')
	})
}

