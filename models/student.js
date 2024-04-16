const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Gradelevel = require("./gradelevel");

const Student = sequelize.define(
  "Student",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      }
    },
    phone: {
      type: DataTypes.INTEGER, // Assuming phone number is stored as a string
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);



module.exports = Student;
