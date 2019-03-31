var path = require("path");

module.exports = function(app) {
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/home.html"));
  });
  //Carousel became about page
  // app.get("/about", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/pages/about.html"));
  // });
  // app.get("/inventory", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/pages/inventory.html"));
  // });

  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/order.html"));
  });
};

// Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/pages/home.html"));
//   });
// };

// app.get("/custom", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/customization.html"));
// });

//OLD CODE
// var db = require("../models");

// module.exports = function(app) {

//   app.get("/", function(req, res) {
//     res.sendFile(db.join(__dirname, "../pages/home.html"));
//   });
//   app.get("/about", function(req, res) {
//     res.sendFile(db.join(__dirname, "../pages/about.html"));
//   });
//   app.get("/inventory", function(req, res) {
//     res.sendFile(db.join(__dirname, "../pages/inventory.html"));
//   });

//   app.get("/order", function(req, res) {
//     res.sendFile(db.join(__dirname, "../pages/order.html"));
//   });
//   app.get("/custom", function(req, res) {
//     res.sendFile(db.join(__dirname, "../pages/customization.html"));
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
