const {DataTypes} = require('sequelize');


module.exports = (sequelize, Sequelize) => {
    const priorityLevel = sequelize.define("priorityLevel",  {
        id : {
            type : DataTypes.SMALLINT,
            allowNull  : false,
            primaryKey: true,
            autoIncrement : true,
        },
        priority : {
            type : DataTypes.STRING(15),
            allowNull  : false,
            unique : true
        },
        level : {
            type : DataTypes.SMALLINT,
            allowNull  : false,
            unique : true
        }
    },
    {
        underscored : true,
        tableName: 'priority_level',
        createdAt: true,
        updatedAt: true,
        indexes: [
            {
              unique: true,
              fields: ["priority", "level"],
            },
          ],
    });
  
   
    return priorityLevel;
};