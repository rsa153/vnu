module.exports = function(sequelize, DataTypes) {
  var CustomOrders = sequelize.define("CustomOrders", {
    batter: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    frosting: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        len: [1, 140],
        isEmail: {
          msg: "Email address must be valid"
        },
        notEmpty: true
      }
    },
    toppings: {
      type: DataTypes.STRING,
      allowNull: false,
      alidate: {
        len: [1, 140]
      }
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
      alidate: {
        len: [1, 140]
      }
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      alidate: {
        len: [1, 140]
      }
    }
  });

  return CustomOrders;
};
