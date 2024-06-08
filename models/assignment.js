const { sequelize } = require("../db");
const { DataTypes, TINYINT } = require("sequelize");

const Assignment = sequelize.define(
  "Assignment",
  {
    title:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    description:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    givenDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

  },
  {
    timestamps: false,
    freezeTableName:true
  }
);
module.exports = Assignment;
