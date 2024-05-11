const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Attendance = sequelize.define(
  "Attendance",
  {
    date: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    isPresent:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Attendance;
