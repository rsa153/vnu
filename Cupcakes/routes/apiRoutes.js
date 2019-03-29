var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/customers", function(req, res) {
    db.Customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  app.get("/api/customers/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Customers.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  app.post("/api/customers", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Customers.create({
      where: {
        id: req.params.id,
        firstName: req.params.firstName
      }
    }).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });
};
