const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const TeacherAssignment = sequelize.define(
  "TeacherAssignment",
  {
    AcademicYearId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SemisterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DepartmentID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    SubjectId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    GradelevelId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    SectionId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    TeacherId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  },
  {
    timestamps: false,
    freezeTableName:true,
  }
);

module.exports = TeacherAssignment;
