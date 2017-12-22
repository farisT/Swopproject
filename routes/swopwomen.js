module.exports = (app, db) => {
	app.get('/swopwomen', (req, res) => {
		db.clothes.findAll({
			where: {
			gender: "Women"
			}
		})
		.then((result)=> {
			console.log(result)
			if (req.session.user){
				res.render("swopwomen", {
					overviewArray: result,
					first_name: req.session.user.first_name
				})
			}
			else{
				res.render("swopwomen", {
					overviewArray: result
				})
			}
		})
		.catch((e) => {
			console.log(e)
		})
	})
}
