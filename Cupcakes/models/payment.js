//Created payment table for future iteration of the application
module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define("Payment", {
    card: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cardNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
      // validate: {
      //   isCreditCard: {
      //     msg: "You must enter a valid credit card number"
      //   }
    },
    expiration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cvc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [3]
    },
    bAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bCity: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bState: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bZipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [5]
    }
  });

  // To associate payment to customer so they don't need to keep reinputting with each application.
  Payment.associate = function(models) {
    Payment.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Payment;
};
