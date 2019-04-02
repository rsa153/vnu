module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define("Orders", {
    date: {
      type: DataTypes.STRING
      // allowNull: false
    },

    // customerID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },

    billingAddress: {
      type: DataTypes.STRING
      // allowNull: false,
    },

    city: {
      type: DataTypes.STRING
      // allowNull: false,
    },

    state: {
      type: DataTypes.STRING
      // allowNull: false
    },

    email: {
      type: DataTypes.STRING
      // allowNull: false,
      // validate: {
      //   isEmail: true
      //   }
    },

    cupcakeType: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    pickupDate: {
      type: DataTypes.DATEONLY
      // allowNull: false
    },
    specialInstructions: {
      type: DataTypes.STRING
      // allowNull: false
    },

    totalPrice: {
      type: DataTypes.INTEGER
      // allowNull: false
    },
    card: {
      type: DataTypes.TEXT
      // allowNull: false
    },
    cardNumber: {
      type: DataTypes.INTEGER
      // allowNull: false,
    },
    cvc: {
      type: DataTypes.INTEGER
      // allowNull: false,
      // validate: {
      //   min: 3,
      //   max: 3
      // }
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
