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

var sess = {secret: 'keyboard cat',cookie: {}}
app.use(session(sess))

// ROUTES 
<<<<<<< HEAD
require("./routes/index.js")(app) 

require("./routes/swopmen.js")(app)
require("./routes/swopwomen.js")(app)

require("./routes/aboutswop.js")(app)
require("./routes/howitworks.js")(app)

require("./routes/subscription.js")(app)
require("./routes/signup.js")(app)
require("./routes/login.js")(app)




app.listen(3001, () => {
    console.log("listening to 3001")
=======
require("./routes/index.js")(app, db) 
require("./routes/swopmen.js")(app, db)
require("./routes/swopwomen.js")(app, db)
require("./routes/aboutswop.js")(app, db)
require("./routes/howitworks.js")(app, db)
require("./routes/signup.js")(app, db)
require("./routes/login.js")(app, db)

db.sequelize.sync({ 
    force: false,
    logging: console.log 
}).then(()=> {
	app.listen(WEBPORT, ()=>{
	console.log('Running on', WEBPORT)
>>>>>>> 5e2102d5d005db27bc3a6e25cc8f53bbf022865b
})
})


// app.listen(process.env.webport, ()=>{
// 	console.log('Running on', process.env.webport)
// })

