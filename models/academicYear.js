const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Section = require("./section");
const Semister = require("./semister");

const AcademicYear = sequelize.define(
  "AcademicYear",
  {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

AcademicYear.hasMany(Section, {
  constraints: false,
});
Section.belongsTo(AcademicYear);

AcademicYear.hasMany(Semister, { constraints: false });
Semister.belongsTo(AcademicYear);

module.exports = AcademicYear;
