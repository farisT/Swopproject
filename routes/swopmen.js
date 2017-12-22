module.exports = (app, db) => {
	app.get('/swopmen', (req, res) => {
		if(req.session.user){

		db.clothes.findAll({
			where: {
			gender: "Men"
			}
		})
		.then((result)=> {

			console.log(result)
		})
		.catch((e) => {
			console.log(e)
		})


		res.send("it worked!")

			// res.render('swopmen', {
			// 	first_name: req.session.user.first_name
			// })
		}
		else {
			res.render('swopmen')
		}
	})
}

