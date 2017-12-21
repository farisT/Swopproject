module.exports = (app, db) => {
	app.get('/howitworks', (req, res) => {
		if(req.session.user){
			res.render('howitworks', {
				user: req.session.user.name})
		}
		else {
			res.render('howitworks')
		}
	})
}
