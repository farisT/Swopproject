module.exports = (app, db, bcrypt) => {
    app.get('/signup', function(req, res) {
        if (req.session.user) { // means already logged in so no need to sign up
            res.render("index", {
                user: req.session.user.name
            })
        } else {
            res.render("signup")
        }
    })

    app.post('/signUp', (req, res) => {
        console.log("req.body.subscription in sign up", req.body.subscription)
        db.users.findAll({
            where: {
            email: req.body.email
            }
        })
        .then((result)=>{
            console.log(result)
            console.log(result.length)
            if(result.length > 0) { 
                // if email already exist in database so array not empty
                res.render("signup", {
                    errorSignup: "Email address already exists"
                })
            }
            else if(result.length <= 0){ // if email doesn't exists yet > add new user in db 
                var salt = bcrypt.genSalt(10, function(error, salt) {
                    bcrypt.hash(req.body.password, salt).then(function(hash, err) {
                        if (err !== undefined) {
                            console.log("The error: ", err)
                        } else {
                            db.users.create({
                                    first_name: `${req.body.firstname}`,
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
                                .then((result) => {
                                    req.session.user = {name: req.body.firstname}
                                    
                                    res.render("profile", {
                                    user: req.session.user.name
                                    })
                                })
                                .catch(e => {
                                    console.log("The error 2: ", e)
                                })
                        }
                    })
                })
            }
        })
        .catch(e => {
            console.log("error 1", e)
        
        })
    })
}



