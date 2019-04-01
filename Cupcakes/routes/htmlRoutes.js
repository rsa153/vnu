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
    res.sendFile(path.join(__dirname, "../public/views/order.html"));
  });
  app.get("/custom", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/customization.html"));
  });
  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/test.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
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
