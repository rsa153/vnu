var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/customers", function(req, res) {
    db.Customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  app.get("/duplicateCheck", function(req, res) {
    db.Customers.findAll({}).then(function(response) {
      var customerArray = [];
      for (i = 0; i < response.length; i++) {
        customerArray.push(response[i].email);
      }
      res.send(customerArray);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/order");
    //Potentially use this.
    // res.redirect('/users/' + req.user.username);
  });

  // app.post("/api/signup", passport.authenticate("local"), function(req, res) {
  //   res.json("/order");
  //   //Potentially use this.
  //   // res.redirect('/users/' + req.user.username);
  // });

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

//     db.orders
//       .create({
//         date: req.body.date,
//         billingAddress: req.body.billingAddress,
//         city: req.body.city,
//         state: req.body.state,
//         email: req.body.email,
//         cupcakeType: req.body.cupcakeType,
//         quantity: req.body.quantity,
//         specialInstructions: req.body.specialInstructions,
//         totalPrice: req.body.totalPrice,
//         card: req.body.card,
//         cardNumber: req.body.cardNumber,
//         cvc: req.body.cvc,
//         CustomerID: req.body.CustomerID
//       })

// .create(req.body).then (function(dbOrders){
//         console.log(dbOrders);
//         res.json(dbOrders);
//       })
//       .then(function(dbOrders) {
//         console.log(dbOrders);
//         res.json(dbOrders);
//       });

// FOUND THIS ONLINE SO WE CAN POTENTIALLY USE THIS
//

// app.get("/logout", function(req, res) {
//   req.logout();
//   res.redirect("/");
// });
