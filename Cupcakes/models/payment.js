module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define("Payment", {
    card: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cardNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
      // unique: true,
      // len: [16],
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

  // Payment.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Payment.belongsTo(models.Customers, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Payment;
};
