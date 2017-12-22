module.exports = (app, db) => {
	app.get('/swopmen', (req, res) => {
		if(req.session.user){
			res.render('swopmen', {
				first_name: req.session.user.first_name
			})
		}
		else {
			res.render('swopmen')
		}
	})
}

