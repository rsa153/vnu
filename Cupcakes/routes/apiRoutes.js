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

  app.post("/api/orders", function(req, res) {
    console.log(req.body);

    db.orders
      .create({
        date: req.body.date,
        billingAddress: req.body.billingAddress,
        city: req.body.city,
        state: req.body.state,
        email: req.body.email,
        cupcakeType: req.body.cupcakeType,
        quantity: req.body.quantity,
        specialInstructions: req.body.specialInstructions,
        totalPrice: req.body.totalPrice,
        card: req.body.card,
        cardNumber: req.body.cardNumber,
        cvc: req.body.cvc,
        CustomerID: req.body.CustomerID
      })
      .then(function(dbOrders) {
        console.log(dbOrders);
        res.json(dbOrders);
      });
  });
};
