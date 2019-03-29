module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
      // validate: {
      //   len: [1, 140]
      // }
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false
      // validate: {
      //   len: [1, 140]
      // }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true
      // validate: {
      //   len: [1, 140],
      //   isEmail: {
      //     msg: "Email address must be valid"
      //   },
      //   notEmpty: true
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
