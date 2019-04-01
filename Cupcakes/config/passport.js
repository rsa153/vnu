//// https://stackoverflow.com/questions/26403853/node-js-authentication-with-passport-how-to-flash-a-message-if-a-field-is-missi
/// missing messages to user if something is wrong.
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.Customers.findOne({
        where: {
          email: email
        }
      }).then(function(dbCustomers) {
        if (!dbCustomers) {
          return done(null, false, {
            msg: "Incorrect email."
          });
        } else if (!dbCustomers.validPassword(password)) {
          return done(null, false, {
            msg: "Incorrect password."
          });
        }
        return done(null, dbCustomers);
      });
    }
  )
);

passport.serializeUser(function(customers, cb) {
  cb(null, customers);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
