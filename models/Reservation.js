const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Reservation extends Model {}

Reservation.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roomId: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startTime:{
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime:{
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Reservation',
    timestamps: true
});

Reservation.belongsTo(require('./Employee'), {
    foreignKey: 'employeeId',
    onDelete: 'CASCADE'
});

Reservation.belongsTo(require('./Room'), {
    foreignKey: 'roomId',
    onDelete: 'CASCADE'
});

module.exports = Reservation;