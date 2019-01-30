// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodo){
      res.json(dbTodo)
    })
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo){
      res.json(dbTodo);
    })
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.end();
    })
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/todos", function(req, res) {
    var newTodo = req.body
    db.Todo.update({
      text: newTodo.text,
      complete: newTodo.complete
    },{
      where: {
        id: newTodo.id
      }
    }).then(function(dbTodo){
      res.json(dbTodo);
    })
  });
};
