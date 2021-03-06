var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/customers", function(req, res) {
    db.Customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/order");
  });

  app.post("/api/customers", function(req, res) {
    console.log(req.body);
    db.Customers.create(req.body).then(function(dbCustomers) {
      console.log(dbCustomers);
      res.json(dbCustomers);
    });
  });

  app.post("/api/orders", function(req, res) {
    console.log(req.body);
    db.Orders.create(req.body).then(function(dbOrders) {
      res.json(dbOrders);
      (function() {
        res.redirect("/");
      });
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

  // app.get("/order", function ensureAuthenticated(req, res) {
  //   if (!req.isAuthenticated()) {
  //     res.redirect("/");
  //   }
  // });
};
