module.exports = (app, db) => {
	app.get('/swopmen', (req, res) => {
		db.clothes.findAll({
			where: {
			gender: "Men"
			}
		})
		.then((result)=> {
			console.log(result)
			if (req.session.user){
				res.render("swopmen", {
					overviewArray: result,
					first_name: req.session.user.first_name
				})
			}
			else{
				res.render("swopmen", {
					overviewArray: result
				})
			}
		})
		.catch((e) => {
			console.log(e)
		})
	})
}

