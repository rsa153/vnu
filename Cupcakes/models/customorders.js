//Creating Custom Orders Table
module.exports = function(sequelize, DataTypes) {
  var CustomOrders = sequelize.define("CustomOrders", {
    batter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    frosting: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    color: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    toppings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  CustomOrders.associate = function(models) {
    CustomOrders.belongsTo(models.Orders, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return CustomOrders;
};
