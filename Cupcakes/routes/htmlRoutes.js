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

//For Custom cupcakes
// app.get("/custom", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/customization.html"));
// });

//Contact page for app
// app.get("/contact", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/contact.html"));
// });

//Page that lists inventory
// app.get("/inventory", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/inventory.html"));
// });

//Manager portal
// app.get("/inventory", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/pages/manager.html"));
// });
