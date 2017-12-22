module.exports = (app, db) => {
	app.get('/swopwomen', (req, res) => {
		if(req.session.user){
			res.render('swopwomen', {
				first_name: req.session.user.first_name
			})
		}
		else {
			res.render('swopwomen')
		}
	})
}

