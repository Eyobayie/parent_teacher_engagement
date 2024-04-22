const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Subject = require("./subject");

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
  }
);
Student.belongsToMany(Subject, {
  through: "studentSubject",
  constraints: false,
});
Subject.belongsToMany(Student, { through: "studentSubject" });

module.exports = Student;
