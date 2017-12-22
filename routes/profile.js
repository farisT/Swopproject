module.exports = (app, db) => {
    app.get('/profile', (req, res) => {
        if (req.session.user) {
            console.log(req.session.user.id)

            // get clothes info from user here and pass into variables
            db.clothes.findAll({
                    where: {
                        user_id: req.session.user.id
                    }
                }) // do 'for each item in array in pug file'
                .then((result) => {
                    console.log(`THIS IS THE RESULT ${result}`)
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
                            clothes: result,
                        })
                })
        } else {
            res.render("login", {
                space: "space"
            })
        }
    })
}
