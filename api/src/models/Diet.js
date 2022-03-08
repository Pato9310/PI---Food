const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('Diet', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        type: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false,
        }
    })
}