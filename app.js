const express = require("express")
const app = express()
const session = require('express-session')
const bodyParser = require("body-parser")
const pg = require('pg')
const Client = pg.Client
const bcrypt = require('bcrypt')
const path = require('path')


require ('dotenv').load();
app.set("view engine", "pug")

app.use(bodyParser.urlencoded({extended:true}))// 
app.use(express.static(path.join(__dirname, 'public'))); // to give app.js access to images on server


var sess = {secret: 'keyboard cat',cookie: {}}
app.use(session(sess))

// Connecting to the right database, details in .env file
// const client = new Client({
// 	user: process.env.user,
//     host: process.env.host,
//     database: process.env.database,
//     password: process.env.password,
//     port: process.env.port
// })

// client.connect((err) => { 
// 	if (err) { console.error('connection error', err.stack)} 
// 	else { console.log('connected')}
// })

// ROUTES 
require("./routes/index.js")(app) 

require("./routes/swopmen.js")(app)
require("./routes/swopwomen.js")(app)

require("./routes/aboutswop.js")(app)
require("./routes/howitworks.js")(app)

require("./routes/signup.js")(app)
require("./routes/login.js")(app)




app.listen(3000, () => {
    console.log("listening to 3000")
})

// app.listen(process.env.webport, ()=>{
// 	console.log('Running on', process.env.webport)
// })

