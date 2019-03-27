var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Home",
      css: "styles.css",
      signInPage: false,
      navBar: false
    });
  });
  app.get("/", function(req, res) {
    res.sendFile(db.join(__dirname, "../Cupcakes/public/views/home.html"));
  });
  app.get("/about", function(req, res) {
    res.sendFile(db.join(__dirname, "../Cupcakes/public/views/about.html"));
  });
  app.get("/inventory", function(req, res) {
    res.sendFile(db.join(__dirname, "../Cupcakes/public/views/inventory.html"));
  });

  app.get("/order", function(req, res) {
    res.sendFile(db.join(__dirname, "../Cupcakes/public/views/oder.html"));
  });
  app.get("/custom", function(req, res) {
    res.sendFile(db.join(__dirname, "../Cupcakes/public/views/customization.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
