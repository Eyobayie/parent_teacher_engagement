const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const HelpResponse = require("./help_response");

const Help = sequelize.define(
  "Help",
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date:{
      type: DataTypes.DATEONLY,
      allowNull:false,
    }
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);



module.exports = Help;
