module.exports = (app, db, bcrypt) => {
var bcrypt = require('bcrypt')

	app.get("/login", (req, res) => {
		if (req.session.user) { // already logged in so no need to login > index page rendered
			res.render("index", {
				first_name: req.session.user.first_name
			})
		} else {
			res.render("login",{
				space: "space"
				})
		}
	})
	 
	app.post("/loginRoute", (req, res) => {
		db.users.findAll({
			where: {
			email: req.body.email
			}
		})
		.then((result)=> {
			console.log("result loginRoute=", result)
			console.log("result.length", result.length)
			// console.log("result[0].dataValues.password = ", result[0].dataValues.password)
			// console.log("result[0].dataValues.first_name = ", result[0].dataValues.first_name)
			// console.log("result of req.body.password", req.body.password)
			if (result.length <= 0) { // so if email doesn't exist in database
				res.render("login", {
					errorLoginEmail: "Email address not found"
				})
			}
			else if (result.length >= 1) { // if email does exist in database > password check
				var userinfo = {
					id: result[0].dataValues.id,
					first_name: result[0].dataValues.first_name,
					last_name: result[0].dataValues.last_name,
					email: result[0].dataValues.email,
					subscription: result[0].dataValues.subscription,
					address: result[0].dataValues.address,
					zip_code: result[0].dataValues.zip_code,
					city: result[0].dataValues.city,
					phone_number: result[0].phone_number,
					date_of_birth: result[0].date_of_birth,
					hashedPassword: result[0].dataValues.password,
				}

				console.log(userinfo)
				bcrypt.compare(req.body.password, userinfo.hashedPassword).then(function(result){
					console.log(result)
					if (result == true) { // if password is correct > go to profile page
						req.session.user = userinfo
						if(req.session.user.first_name){
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
					} 
					else {
						console.log("nah m8 password incorrect")
						res.render("login", {
							errorLoginPassword: "Incorrect password and email combination: please try again"
						})
					}
				})
			}
		})
		.catch((e) => {
		 console.log(e)
		})
	})
}