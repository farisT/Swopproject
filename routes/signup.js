module.exports = (app, db, bcrypt) => {
    app.get('/signup', function(req, res) {
        if (req.session.user) { // means already logged in so no need to sign up
            res.render("index", {
                first_name: req.session.user.first_name
            })
        } else {
            res.render("signup")
        }
    })

    app.post('/signUp', (req, res) => {
        console.log("req.body.subscription in sign up", req.body.subscription)
        var email = req.body.email
        db.users.findAll({
                where: {
                    email: req.body.email
                }
            })
            .then((result) => {
                if (result.length > 0) {
                    // if email already exist in database so array not empty
                    res.render("signup", {
                        errorSignup: "Email address already exists"
                    })
                } else if (result.length <= 0) { // if email doesn't exists yet > add new user in db 
                    var salt = bcrypt.genSalt(10, function(error, salt) {
                        bcrypt.hash(req.body.password, salt)
                        .then((hash)=> {
                            return db.users.create({
                                first_name: req.body.firstname,
                                last_name: `${req.body.lastname}`,
                                email: `${req.body.email}`,
                                subscription: `${req.body.subscription}`,
                                address: `${req.body.address}`,
                                zip_code: `${req.body.zipcode}`,
                                city: `${req.body.city}`,
                                phone_number: `+31${req.body.phoneNumber}`,
                                date_of_birth: `${req.body.dateOfBirth}`,
                                password: `${hash}`
                            })
                        })
                        .then((createdUser) => {
                            var userinfo = {
                                    id: createdUser.dataValues.id,
                                    first_name: createdUser.dataValues.first_name,
                                    last_name: createdUser.dataValues.last_name,
                                    email: createdUser.dataValues.email,
                                    subscription: createdUser.dataValues.subscription,
                                    address: createdUser.dataValues.address,
                                    zip_code: createdUser.dataValues.zip_code,
                                    city: createdUser.dataValues.city,
                                    phone_number: createdUser.phone_number,
                                    date_of_birth: createdUser.date_of_birth,
                                }
                                req.session.user = userinfo
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
                                })
                        })
                    })
                }
            })
            .catch(e => {
                console.log("error 1:", e)
            })
        }) //end of app.post
} //end of module exports