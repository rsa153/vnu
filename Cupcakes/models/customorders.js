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
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    CustomOrders.belongsTo(models.Orders, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return CustomOrders;
};
