var orm = require("./config/orm.js");
var express = require("express");
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");



orm.select("party_name", "parties")

orm.select("client_name", "clients")


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});