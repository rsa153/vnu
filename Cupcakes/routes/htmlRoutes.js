var path = require("../path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });
  //Carousel became about page
  // app.get("/about", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/views/about.html"));
  // });
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/inventory.html"));
  });

  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/order.html"));
  });
  app.get("/custom", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/customization.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });
};

//OLD CODE
// var db = require("../models");

// module.exports = function(app) {

//   app.get("/", function(req, res) {
//     res.sendFile(db.join(__dirname, "../views/home.html"));
//   });
//   app.get("/about", function(req, res) {
//     res.sendFile(db.join(__dirname, "../views/about.html"));
//   });
//   app.get("/inventory", function(req, res) {
//     res.sendFile(db.join(__dirname, "../views/inventory.html"));
//   });

//   app.get("/order", function(req, res) {
//     res.sendFile(db.join(__dirname, "../views/order.html"));
//   });
//   app.get("/custom", function(req, res) {
//     res.sendFile(db.join(__dirname, "../views/customization.html"));
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
