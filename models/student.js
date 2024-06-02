const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Subject = require("./subject");
const Attendance = require("./attendance");

const Student = sequelize.define(
  "Student",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);
Student.belongsToMany(Subject, {
  through: "studentSubject",
  constraints: false,
});
Subject.belongsToMany(Student, { through: "studentSubject" });
Student.hasMany(Attendance, {constraints:false});
Attendance.belongsTo(Student);
module.exports = Student;
