const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host : dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorAlias:false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging : console.log,
  define : dbConfig.define
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const ActivityGroup = require("./activityGroup.model")(sequelize, Sequelize);
const PriorityLevel = require("./priorityLevel.model")(sequelize, Sequelize);
const TodoItems = require("./todoItems.model")(sequelize, Sequelize);

ActivityGroup.hasMany(TodoItems,{foreignKey: 'id'});
TodoItems.belongsTo(ActivityGroup,{foreignKey: 'activityGroupId'})
TodoItems.belongsTo(PriorityLevel,{foreignKey: 'priorityLevelId'})
PriorityLevel.hasMany(TodoItems,{foreignKey: 'id'});

db.activityGroup = ActivityGroup;
db.priorityLevel = PriorityLevel;
db.todoItems = TodoItems;



module.exports = db;