const Sequelize = require('sequelize');

module.exports = function (connection) {
    const users_master = connection.define('users_master', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: Sequelize.STRING
    },
        {
            freezeTableName: true,
            tableName: 'users_master'
        })
    return users_master;
}