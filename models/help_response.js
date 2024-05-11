const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const HelpResponse = sequelize.define(
  "HelpResponse",
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = HelpResponse;
