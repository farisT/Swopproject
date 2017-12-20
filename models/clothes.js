module.exports = (sequelize, Sequelize) => {
		var users = sequelize.define('clothes', { 
	    title: {
	        type: Sequelize.STRING,
	        unique: false,
	        allowNull: false
	    },
	    body: {
	        type: Sequelize.TEXT
	    },
	})
}