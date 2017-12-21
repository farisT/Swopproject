module.exports = (app, db, bcrypt) => {
    app.get("/login", (req, res) => {
        res.render("login", {
            isLoggedIn: true,
            title: "Login"
        })
    })

	app.post("/login", (req, res) => {
		db.users.findAll({
			where: {
    		email: `${req.body.email}`
    		}
		})
		.then((result)=> {
			console.log(result)
        	if (!result[0].dataValues.email) {
        		res.render("login", {
        			errorLogin: "Email address not found: please sign up"
        		})
       		 } else {
				bcrypt.compare(req.body.password, result[0].dataValues.password).then(function(result){
					if (result == true) {
						req.session.user = {name: result[0].dataValues.first_name}
						res.render("profile", {
						user: req.session.user.name
						})
					} else if (result == false ) {
						console.log("nah m8")
						res.render("login", {
           					errorLogin: "Incorrect password and email address combination: please try again"
						})
					} else {
						console.log("failed @ end")
						res.end()
					}
				})
				}
	 		})
	 	.catch((e) => {
       	 console.log(e)
		})
	})
}