module.exports = (app, db) => {
	app.get('/swopwomen', (req, res) => {
		if(req.session.user){
			res.render('swopwomen', {
				user: req.session.user.name
			})
		}
		else {
			res.render('swopwomen')
		}
	})
}

