module.exports = (app, db) => {
	app.get('/howitworks', (req, res) => {
		if(req.session.user){
			res.render('howitworks', {
				first_name: req.session.user.first_name})
		}
		else {
			res.render('howitworks')
		}
	})
}
