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
				res.render("swopmen", {overviewArray: result ,first_name: req.session.user.first_name})
			})
			.catch((e) => {
			console.log(e)
				})

		}
	})
}
