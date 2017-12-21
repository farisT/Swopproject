module.exports = (app, db) => {
	app.get('/uploadpage', (req, res) => {
		// if(req.session.user){
			res.render('uploadpage')//,{username: req.session.user.name})
					// }
		// else {
		// 	res.render('index')
		// }

	})
}