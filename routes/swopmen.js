module.exports = (app, db) => {
	app.get('/swopmen', (req, res) => {
		if(req.session.user){
			res.render('swopmen', {
				user: req.session.user.name
			})
		}
		else {
			res.render('swopmen')
		}
	})
}

