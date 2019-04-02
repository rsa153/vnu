// Creates Orders Table
module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define("Orders", {
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },

    billingAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   isEmail: true
      //   }
    },

    cupcakeType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pickupDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    specialInstructions: {
      type: DataTypes.STRING
    },

    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    card: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cardNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cvc: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  //Associates orders to Customer
  Orders.associate = function(models) {
    Orders.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Orders;
};
