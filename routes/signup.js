module.exports = (app, db, bcrypt) => {
    app.get('/signUp', function(req, res) {
        if (!req.session.user) {
            res.render("signUp", {
                isLoggedIn: true
            })
        } else {
            res.redirect("/")
            console.log("ALREADY LOGGED IN")
        }
    })

    app.post('/signUp', (req, res) => {

        var salt = bcrypt.genSalt(10, function(error, salt) {
            bcrypt.hash(req.body.password, salt).then(function(hash, err) {
                if (err !== undefined) {
                    console.log("The error: ", err)
                } else {
                	console.log(hash)
                    db.users.create({
                            first_name: ,
                            last_name: ,
                            email: ,
                            subscription: ,
                            address: ,
                            zip_code: ,
                            city: ,
                            phone_number: ,
                            date_of_birth: ,
                            password: `${hash}`
                        })
                        .then((result) => {
                            console.log("SIGN UP SUCCESSFUL: @FARIS AND PATRICIA WHERE DO WE REDIRECT TO NOW?")
                        })
                        .catch(e => {
                            console.log("The error: ", e)
                        })
                }
            })
        })
    })
}