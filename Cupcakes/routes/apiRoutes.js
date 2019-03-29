var db = require("../models");

module.exports = function(app) {
  app.get("/api/customers", function(req, res) {
    db.Customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  app.get("/api/customers/:id", function(req, res) {
    db.Customers.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  app.post("/api/customers", function(req, res) {
    console.log(req.body);
    db.Customers.create(req.body).then(function(dbCustomers) {
      console.log(dbCustomers);
      res.json(dbCustomers);
    });
  });
};
