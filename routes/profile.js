module.exports = (app,db) => {
	app.get('/profile', (req, res) => {
		if(req.session.user){
				res.render("profile", {
					id: req.session.user.id,
					first_name: req.session.user.first_name,
					last_name: req.session.user.last_name,
					email: req.session.user.email,
					subscription: req.session.subscription,
					address: req.session.user.address,
					zip_code: req.session.user.zip_code,
					city: req.session.user.city,
					phone_number: req.session.user.phone_number,
					date_of_birth: req.session.user.date_of_birth,
					hashedPassword: req.session.user.hashedPassword,
				})
		}
		else {
			res.render('index')
		}
	})
}