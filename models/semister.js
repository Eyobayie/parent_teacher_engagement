const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Semister = sequelize.define(
  "Semister",
  {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    description:{
      type:DataTypes.STRING(300),
      allowNull:true,
    }
  },
  {
    timestamps: false,
  }
);


module.exports = Semister;
