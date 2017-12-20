module.exports = (sequelize, DataTypes) => {
		var Clothes = sequelize.define('clothes', { 
	    title: {
	        type: DataTypes.STRING,
	        unique: false,
	        allowNull: false
	    },
	    body: {
	        type: DataTypes.TEXT
	    }
	})
		return Clothes; 
}