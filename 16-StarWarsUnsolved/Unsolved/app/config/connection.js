// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var sequelize = require("sequelize");

// Setting up our connection information
const sequelize = new Sequelize('starwars', 'root', 'root', {
  dialect: 'mysql',
  host: "localhost",
  port: 3306
});


// Exporting our connection
module.exports = sequelize;
