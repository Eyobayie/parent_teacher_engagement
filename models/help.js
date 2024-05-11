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
  },
  {
    timestamps: false,
  }
);

Help.hasMany(HelpResponse,{constraints:false});
HelpResponse.belongsTo(Help);

module.exports = Help;
