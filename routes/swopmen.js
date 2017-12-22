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

	// ROUTE FOR  THE CATEGORIESSS DONT KNOW HOW TO SOLVE IT NICELY YET
	// keep in mind there is a little bit of jquery in pug page to change the selected element 
	app.get('/swopmenSuits', (req, res) => { 
		db.clothes.findAll({
			where: {
			gender: "Men",
			category: "suits"
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

