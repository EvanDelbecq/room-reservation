const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('room_reservation', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    }
});

module.exports = sequelize;