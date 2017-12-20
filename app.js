const express = require("express"), 
	  app = express(),
	  session = require('express-session'),
	  bodyParser = require("body-parser"),
	  pg = require('pg'),
	  Client = pg.Client, 
	  bcrypt = require('bcrypt'),
	  path = require('path'),
	  db = require(path.resolve( __dirname, "./config/db.js" ))
	  env = require(path.resolve( __dirname, "./config/.env.js" ))

require ('dotenv').load()
app.set("view engine", "pug")
var WEBPORT = env.WEBPORT
console.log(env.WEBPORT)
app.use(bodyParser.urlencoded({extended:true}))// 
app.use(express.static(path.join(__dirname, 'public'))); // to give app.js access to images on server

app.use(session({
    secret: 'keyboard cat', // MAKE THIS AN ENV VARIABLE ALSO
    cookie: {},
    resave: true,               
    saveUninitialized: true     
}))

// ROUTES 

require("./routes/index.js")(app, db) 
require("./routes/swopmen.js")(app, db)
require("./routes/swopwomen.js")(app, db)
require("./routes/aboutswop.js")(app, db)
require("./routes/howitworks.js")(app, db)
require("./routes/signup.js")(app, db, bcrypt)
require("./routes/subscription.js")(app)
require("./routes/signup.js")(app, db)
require("./routes/login.js")(app, db, bcrypt)
require("./routes/subscription.js")(app)
require("./routes/profilepage.js")(app)

db.sequelize.sync({ 
    force: true, // CHANGE THIS WHEN HOSTING - WILL OTHERWISE DELETE ALL DATA WHEN RESTARTING THE APP ! ! ! ! ! ! ! ! ! !! ! ! ! ! ! ! !! ! 
    logging: console.log 
}).then(()=> {
	app.listen(WEBPORT, ()=>{
	console.log('Running on', WEBPORT)

	})
})


