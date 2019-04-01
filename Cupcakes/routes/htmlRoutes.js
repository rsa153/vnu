var path = require("path");

module.exports = function(app) {
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });
  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/order.html"));
  });

  // Directs user to home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });
};

// app.get("/custom", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/customization.html"));
// });

//Carousel became about page
// app.get("/about", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/about.html"));
// });
// app.get("/inventory", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/inventory.html"));
// });
