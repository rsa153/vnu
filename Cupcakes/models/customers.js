//Reguire bycrypt for hastag hashing.
var bcrypt = require("bcrypt-nodejs");

//Defining customer tables. Note: form validation done using bootstrap.
module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirm: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Hashing of password before Customer acccuunt is created.

  Customers.prototype.validPassword = function(password, confirm) {
    return bcrypt.compareSync(password, this.password, confirm, this.confirm);
  };

  Customers.hook("beforeCreate", function(customers) {
    customers.password = bcrypt.hashSync(
      customers.password,
      bcrypt.genSaltSync(10),
      null
    );
    customers.confirm = bcrypt.hashSync(
      customers.confirm,
      bcrypt.genSaltSync(10),
      null
    );
  });

  // Associting Customer with many orders
  Customers.associate = function(models) {
    Customers.hasMany(models.Orders);
  };
  return Customers;
};
