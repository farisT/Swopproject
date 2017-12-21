module.exports = (app, db) => {
	app.get('/', (req, res) => {
		if(req.session.user){
			res.render('index', {
				user: req.session.user.name})
		}
		else {
			res.render('index')
		}
	})
}