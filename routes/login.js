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
			console.log(result[0].dataValues.email, result[0].dataValues.password)
        	if (!result[0].dataValues.password) {
       		 } else {
				bcrypt.compare(req.body.password, result[0].dataValues.password).then(function(result){
					if (result == true) {
						res.send("bcrypt compare worked")
						// req.session.user = {name: req.body.firstname}
						// res.render("profile", {
						// user: req.session.user.name,
						// isLoggedIn: true,
						// title: "Profile"})
					} else {
						res.send("bcrypt failed")
						// res.render("/", {
      //      					isLoggedIn: true,
      //      					title: "Homepage"
						// })
					}
				})
				}
	 		})
	 	.catch((e) => {
       	 console.log(e)
		    })
	})
}