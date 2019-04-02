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
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Inventory.associate = function(models) {
    
    Inventory.belongsTo(models.Manager, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Inventory;
};
