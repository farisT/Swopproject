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
                    db.users.create({
                            first_name: `${req.body.firstname}`,
                            last_name: `${req.body.lastname}`,
                            email: `${req.body.email}`,
                            subscription: `simple_shopper`, // WORK OUT HOW TO FIX THIS
                            address: `${req.body.address}`,
                            zip_code: `${req.body.zipcode}`,
                            city: `${req.body.city}`,
                            phone_number: `+31${req.body.phoneNumber}`,
                            date_of_birth: `31-05-1993`, // WORK OUT HOW TO FIX THIS
                            password: `${hash}`
                        })
                        .then((result) => {
                            console.log("SIGN UP SUCCESSFUL: @FARIS AND PATRICIA WHERE DO WE REDIRECT TO NOW?")
                        	res.send('worked')
                        })
                        .catch(e => {
                            console.log("The error: ", e)
                        })
                }
            })
        })
    })
}