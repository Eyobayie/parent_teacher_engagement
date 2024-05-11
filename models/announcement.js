const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Announcement = sequelize.define(
  "Announcement",
  {
    date: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
      }
  },
  {
    timestamps: false,
  }
);

module.exports = Announcement;
