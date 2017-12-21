module.exports = (app, db, bcrypt) => {
var bcrypt = require('bcrypt')

	app.get("/login", (req, res) => {
		if (req.session.user) { // already logged in so no need to login > index page rendered
			res.render("index", {
				user: req.session.user.name
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
			console.log("result=", result)
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
				var hashedPassword = result[0].dataValues.password
				var firstNameUser = result[0].dataValues.first_name
				console.log("firstnameuser = ", firstNameUser)
				bcrypt.compare(req.body.password, hashedPassword).then(function(result){
					console.log(result)
					if (result == true) { // if password is correct > go to profile page
						req.session.user = {name: firstNameUser}
						if(req.session.user.name){
							res.render("profile", {
								user: req.session.user.name
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