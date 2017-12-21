module.exports = (sequelize, DataTypes) => {
    var Clothes = sequelize.define('clothes', {
            category: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
                values: ['Coats&Jackets', 'Hoodies', 'Sweatshirts', 'Cardigans', 'Jeans', 'Trousers', 'Skirts', 'Shorts', 'Suits', 'Dresses', 'Jumpsuits', 'Accessories']
            },
            size: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
                values: ['S', 'M', 'L']
            },
            gender: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
                values: ['Man', 'Woman', 'Unisex']
            },
            brand: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
                validate: {
                    startsWithUpper: function(bodyval) {
                        var first = bodyVal.charAt(0)
                        var startsWithUpper = first === first.toUpperCase()
                        if (!startsWithUpper) {
                            throw new Error('first letter must be uppercase')
                        } else {
                            console.log(" ")
                        }
                    }
                }
            },
            borrow_time: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
                values: ['3 months', '4 months', '5 months', '6 months', '> 6 months']
            },
            comments: {
                type: DataTypes.TEXT,
                unique: false,
                allowNull: true
            },
            condition: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false,
                values: ['New', 'Good as new', 'Used']
            }
        })
return Clothes;
}