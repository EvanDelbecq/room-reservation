const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Employee extends Model {}

Employee.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Employee',
    timestamps: true
});
    
module.exports = Employee;