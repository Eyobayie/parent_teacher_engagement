const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Student = require("./student");

const Section = sequelize.define(
  "Section",
  {
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);

// Section.hasMany(Student, {constraints:false})
// Student.belongsTo(Section)

module.exports = Section;
