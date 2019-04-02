var db = require("../models");
var passport = require("../config/passport");

//Returns all customers in db
module.exports = function(app) {
  app.get("/api/customers", function(req, res) {
    db.Customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  //Authenticates customer after they login and directs them to the order form
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/order");
  });

  //Writes customer to the db
  app.post("/api/customers", function(req, res) {
    console.log(req.body);
    db.Customers.create(req.body).then(function() {
      res.redirect(307, "/api/login");
    });
  });

  //writes order to the db and then redirects them to the hompage.
  app.post("/api/orders", function(req, res) {
    console.log(req.body);
    db.Orders.create(req.body).then(function(dbOrders) {
      res.json(dbOrders);
      (function() {
        res.redirect("/");
      });
    });
  });

  //queries for single customer.
  app.get("/api/customers/:id", function(req, res) {
    db.Customers.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });
};
