module.exports = (app, db) => {
	app.get('/aboutswop', (req, res) => {
		if(req.session.user){
			res.render('aboutswop', {
				first_name: req.session.user.first_name})
		}
		else {
			res.render('aboutswop')
		}
	})
}
