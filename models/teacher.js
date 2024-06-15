const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

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
    username:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:'teacher',
    }
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);

// Teacher.belongsToMany(Gradelevel, {
//   through: "teacherGradelevel",
//   constraints: false,
// });
// Gradelevel.belongsToMany(Teacher, { through: "teacherGradelevel" });

// Subject.belongsToMany(Teacher, {
//   through: "teacherSubject",
//   constraints: false,
// });
// Teacher.belongsToMany(Subject, { through: "teacherSubject" });
// Teacher.hasMany(Attendance, {constraints:false});
// Attendance.belongsTo(Teacher);

module.exports = Teacher;

// ATTENDANCECE, RERISTER RESULT, CHAT with, REPORT FOR, ANNOUNCEMENT, VIEW ANNOUNCEMENT,
// DAILT ASSIGNMENT, FOR TEACHERS
// VIEW ATTENDANCE, RESULT, CHAT with, VIEW ANNOUNCEMENT, FOLLOWUP ASSIGNMENT, 
// FOR PARENTS

// System admin
// Register Student, Teacher, Parent, Grade, Section, Academic, Create Announcement, REPORT ABOUT THE FileSystem, View help and make a response