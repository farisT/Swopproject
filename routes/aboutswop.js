module.exports = (app, db) => {
	app.get('/aboutswop', (req, res) => {
		if(req.session.user){
			res.render('aboutswop', {
				user: req.session.user.name})
		}
		else {
			res.render('aboutswop')
		}
	})
}
