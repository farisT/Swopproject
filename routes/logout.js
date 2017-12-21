module.exports = (app) => {
	app.get('/logout', function(req, res) {
		if (req.session.user) {
			console.log("LOGGED OUT SUCCESSFULLY")
			req.session.destroy()
            res.render("index")
		} else {
			res.render("index")
		}
	})
}
