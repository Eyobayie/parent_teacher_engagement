const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Subject = require("./subject");
const Attendance = require("./attendance");
const StudentResult = require("./student_result");

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

module.exports = Student;
