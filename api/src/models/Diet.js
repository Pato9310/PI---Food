const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('Diet', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}