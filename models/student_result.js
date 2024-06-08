const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const StudnetResult = sequelize.define(
  "StudentResult",
  {
    academicYearId: {
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

Section.hasMany(Student, {constraints:false})
Student.belongsTo(Section)

module.exports = Section;
