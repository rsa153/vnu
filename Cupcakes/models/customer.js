module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Customer;
};
