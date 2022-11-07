const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const activityGroup = sequelize.define("activityGroup",  {
        id : {
            type : DataTypes.INTEGER,
            allowNull  : false,
            primaryKey: true,
            autoIncrement : true,
        },
        email : {
            type : DataTypes.STRING(50),
            allowNull  : false,
        },
        title : {
            type : DataTypes.STRING(100),
            allowNull  : false,
        }
    },
    {
        underscored : true,
        tableName: 'activity_group',
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        indexes: [
            {
              fields: ["email", "title"],
            },
          ],
    });
  
    return activityGroup;
};