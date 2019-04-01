var bcrypt = require("bcrypt-nodejs");

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
      // alidate: {
      //   len: [1, 140]
      // }
    },
    confirm: {
      type: DataTypes.STRING,
      allowNull: false
      // alidate: {
      //   len: [1, 140]
      // }
    }
  });

  Customers.prototype.validPassword = function(password, confirm) {
    return bcrypt.compareSync(password, this.password, confirm, this.confirm);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
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
  // Customer.associate = function(models) {
  // }
  Customers.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Customers.hasMany(models.Orders);
  };
  return Customers;
};
