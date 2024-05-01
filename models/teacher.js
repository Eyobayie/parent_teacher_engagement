const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Gradelevel = require("./gradelevel");
const Subject = require("./subject");

const Teacher = sequelize.define(
  "Teacher",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Teacher.belongsToMany(Gradelevel, {
  through: "teacherGradelevel",
  constraints: false,
});
Gradelevel.belongsToMany(Teacher, { through: "teacherGradelevel" });

Subject.belongsToMany(Teacher, {
  through: "teacherSubject",
  constraints: false,
});
Teacher.belongsToMany(Subject, { through: "teacherSubject" });

module.exports = Teacher;

// ATTENDANCECE, RERISTER RESULT, CHAT with, REPORT FOR, ANNOUNCEMENT, VIEW ANNOUNCEMENT,
// DAILT ASSIGNMENT,
// VIEW ATTENDANCE, RESULT, CHAT with, VIEW ANNOUNCEMENT, FOLLOWUP ASSIGNMENT, 

// REGISTER Student, TEACHER, PARENT,GRADE,SECTION, ACADEMIC, CREATE ANNOUNCEMENT,REPORT ABOUT THE FileSystem,