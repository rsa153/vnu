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
    }
  });
  return Orders;
};
