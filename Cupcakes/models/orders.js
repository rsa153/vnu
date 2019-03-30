module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define("Orders", {
    cupcakeInvSelect: {
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    specialInstructions: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Orders.associate = function(models) {
    Orders.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Orders;
};
