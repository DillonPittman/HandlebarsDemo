var Sequelize = require("sequelize")
var sequelize = require("../config/connection.js")

var Character = sequelize.define("character", {
  routeName: sequelize.STRING,
  name: sequelize.STRING,
  role: sequelize.STRING,
  age: sequelize.INTEGER,
  forcePoints: sequelize.INTEGER,
},{
  freezeTableName: true
});
Character.sync();

module.exports = Character;