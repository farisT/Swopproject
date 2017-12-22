module.exports = (app, db) => {
	app.get('/swopwomen', (req, res) => {
		if(req.session.user){

		db.clothes.findAll({
			where: {
			gender: "Women"
			}
		})
		.then((result)=> {
			console.log(result)
				res.render("swopwomen", {overviewArray: result ,first_name: req.session.user.first_name})
			})
			.catch((e) => {
			console.log(e)
				})
		else {

			res.render("swopwomen")
		}
		}
	})
}
