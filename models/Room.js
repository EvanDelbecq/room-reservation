const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Room extends Model {}

Room.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    location: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Room',
    timestamps: true
});

module.exports = Room;