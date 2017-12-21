module.exports = (app,db) => {
	app.get('/profile', (req, res) => {
		if(req.session.user){
			res.render('profile', {
				user: req.session.user.name
			})
		}
		else {
			res.render('index')
		}
	})
}