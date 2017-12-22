module.exports = (app, db, upload, path, fs) => {
	app.get('/uploadpageRoute', (req, res) => {
		if(req.session.user){
			res.render('uploadpage', {
				first_name: req.session.user.first_name
			})
		}
		else {
			res.render("index")
		}
	})

		app.post('/uploaditem', upload.single("file"), function(req, res) {
			console.log(req.file)
			console.log(req.body.categories)
			console.log(req.body.size)
			console.log(req.body.buttonGender)
			console.log(req.body.brand)
			console.log(req.body.borrowTime)
			console.log(req.body.comments)
			console.log(req.body.buttonCondition)
			db.clothes.create({
				itemimage: `${req.file.filename}`,
				category: `${req.body.categories}`,
				size: `${req.body.size}`,
				gender: `${req.body.buttonGender}`,
				brand: `${req.body.brand}`,
				borrow_time: `${req.body.borrowTime}`,
				comments: `${req.body.comments}`,
				condition: `${req.body.buttonCondition}`,
				user_id: `${req.sessions.user.id}`
			})
		res.send("your item has been uploaded!")
	})
}

/*
This is what 'req.file' prints: 
{ fieldname: 'file',
  originalname: 'imgprofilenav.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'images/',
  filename: 'e17148fb3bb1814469369a22f5f25076',
  path: 'images/e17148fb3bb1814469369a22f5f25076',
  size: 3794 }
*/
