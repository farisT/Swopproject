module.exports = (app, db, upload, path, fs) => {

		app.get('/uploadpage', (req, res) => {
			res.render('uploadpage')
	})
		app.post('/uploaditem', upload.single("file"), function(req, res) {

 	console.log(req.file)
    // ...

		
		res.send("your file has been uploaded!")
	// client.query(`INSERT INTO images (location) values()


	})
}
