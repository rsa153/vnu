module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    cupcakeName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        len: [1, 1000],
        isEmail: {
          msg: "Email address must be valid"
        },
        notEmpty: true
      }
    }
  });
  // Customer.associate = function(models) {
  // }

  return Inventory;
};
