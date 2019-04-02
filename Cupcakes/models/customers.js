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
    Customers.hasMany(models.Orders);
  };
  return Customers;
};
