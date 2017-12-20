module.exports = (sequelize, Sequelize) => {
    var users = sequelize.define('users', {
        first_name: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false,
        },
        zip_code: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        phone_number: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        date_of_birth: {
            type: Sequelize.DATE,
            unique: false,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
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
}