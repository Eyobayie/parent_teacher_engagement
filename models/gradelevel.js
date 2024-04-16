const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Section = require("./section");
const Student = require("./student");

const Gradelevel = sequelize.define(
  "Gradelevel",
  {
    grade: {
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
  }
);

Gradelevel.hasMany(Section,{constraints:false});
Section.belongsTo(Gradelevel);

Gradelevel.hasOne(Student,{constraints:false});
Student.belongsTo(Gradelevel);

module.exports = Gradelevel;
