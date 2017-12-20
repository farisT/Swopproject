module.exports = (sequelize, DataTypes) => {
    var User =  sequelize.define('users', {
        first_name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        subscription: {
            type: DataTypes.STRING,
            values: [ "DIFFERENT" , 'SUBS' , 'HERE' , ]
        },
        address: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        },
        zip_code: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        date_of_birth: {
            type: DataTypes.DATE,
            unique: false,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 20], // specific to this error
                    msg: 'Password must contain at least 8 characters'
                }
            }
        },
    })
    return User;
}