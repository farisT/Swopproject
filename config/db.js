const Sequelize = require('sequelize')
var path = require('path')
var env = require(path.resolve( __dirname, ".env.js" ))
debugger
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  dialect: env.DATABASE_DIALECT,
  port: env.PORT,
  define: {
    underscored: true // table column names are snake_case not camelCase !!
  }
})

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require(path.resolve( __dirname, '../models/users.js'))(sequelize, Sequelize)
db.clothes = require(path.resolve( __dirname, '../models/clothes.js'))(sequelize, Sequelize)

//Relations
// db.clothes.belongsTo(db.users)
// db.users.hasMany(db.clothes)

module.exports = db

