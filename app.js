const express = require("express"), 
	  app = express(),
	  session = require('express-session'),
	  bodyParser = require("body-parser"),
	  pg = require('pg'),
	  Client = pg.Client, 
	  bcrypt = require('bcrypt'),
	  path = require('path'),
	  multer  = require('multer'),
	  fs = require('fs'),
	  storage = multer.diskStorage({
	  	destination: function (req, file, cb) {
	  		cb(null, 'public/images/uploaditem')
		},
		filename: function (req, file, cb) {
			cb(null, Date.now() + path.extname(file.originalname))
		}
})
	  upload = multer({ storage: storage }),
	  // upload = multer({ dest: 'public/images/uploaditem' }),
	  db = require(path.resolve( __dirname, "./config/db.js" ))
	  env = require(path.resolve( __dirname, "./config/.env.js" ))


require ('dotenv').load()
app.set("view engine", "pug")
var WEBPORT = env.WEBPORT
app.use(bodyParser.urlencoded({extended:true}))// 
app.use(express.static(path.join(__dirname, 'public'))); // to give app.js access to images on server

app.use(session({
    secret: 'keyboard cat', // MAKE THIS AN ENV VARIABLE ALSO
    cookie: {},
    resave: true,               
    saveUninitialized: true     
}))


require("./routes/index.js")(app, db) 
require("./routes/swopmen.js")(app, db)
require("./routes/swopwomen.js")(app, db)
require("./routes/aboutswop.js")(app, db)
require("./routes/howitworks.js")(app, db)
require("./routes/subscription.js")(app)
require("./routes/signup.js")(app, db, bcrypt)
require("./routes/login.js")(app, db, bcrypt)
require("./routes/logout.js")(app, db)
require("./routes/profile.js")(app,db)
require("./routes/uploadpage.js")(app,db,upload, path, fs)


db.sequelize.sync({ 
    force: false, // CHANGE THIS TO FALSE WHEN HOSTING - WILL OTHERWISE DELETE ALL DATA WHEN RESTARTING THE APP ! ! ! ! ! ! ! ! ! !! ! ! ! ! ! ! !! ! 
    logging: console.log 
}).then(()=> {
	app.listen(WEBPORT, ()=>{
	console.log('Running on', WEBPORT)
	})
})


