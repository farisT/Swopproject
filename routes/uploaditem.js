module.exports = (app, db, upload, path, fs) => {
	app.get('/uploadpage', (req, res) => {
		if(req.session.user){
			res.render('uploadpage', {
				user: req.session.user.name
			})
		}
		else {
			res.render("index")
		}
	})

		app.post('/uploaditem', upload.single("file"), function(req, res) {
			console.log(req.file)
			db.clothes.create({
				category: `${req.body.category}`,
				size: `${req.body.size}`,
				gender: `${req.body.gender}`,
				brand: `${req.body.brand}`,
				borrow_time: `${req.body.borrowtime}`,
				comments: `${req.body.comments}`,
				condition: `${req.body.condition}`,
				image: `${req.file.filename}`,
			})
		res.send("your file has been uploaded!")
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

