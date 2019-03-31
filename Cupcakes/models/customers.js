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
      allowNull: false,
      validate: {
        isEmail: true,
        msg: "Please input an email address"
      },
      unique: {
        args: true,
        msg: "Email address already in use!"
      }
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
  // Customer.associate = function(models) {
  // }
  Customers.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Customers.hasMany(models.Orders);
  };
  return Customers;
};
