const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const TeacherAssignment = sequelize.define(
  "TeacherAssignment",
  {
    AcademicYearId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SemisterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DepartmentID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    SubjectId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    GradelevelId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    SectionId:{
        type:DataTypes.INTEGER,
        allowNull:true,
    }
  },
  {
    timestamps: false,
    freezeTableName:true,
  }
);

module.exports = TeacherAssignment;
