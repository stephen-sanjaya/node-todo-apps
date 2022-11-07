const {DataTypes} = require('sequelize');


module.exports = (sequelize, Sequelize) => {
    const todoItems = sequelize.define("todoItems",  {
        id : {
            type : DataTypes.INTEGER,
            allowNull  : false,
            primaryKey: true,
            autoIncrement : true,
        },
        activityGroupId : {
            type : DataTypes.INTEGER,
            allowNull  : false,
        },
        title : {
            type : DataTypes.STRING(100),
            allowNull  : false,
        },
        isActive : {
            type : DataTypes.BOOLEAN,
            allowNull  : true,
            defaultValue: true
        },
        priorityLevelId : {
            type : DataTypes.SMALLINT,
            allowNull  : true,
        },

    },
    {
        underscored : true,
        tableName: 'todo_items',
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        indexes: [
            {
              fields: ["title"],
            },
          ],
    });

    return todoItems;
};