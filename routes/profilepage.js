module.exports = (app,db) => {
	app.get('/profilepage', (req, res) => {
		// if(req.session.user){
			res.render('profile')//,{username: req.session.user.name})
		// }
		// else {
		// 	res.render('index')
		// }
	})
}