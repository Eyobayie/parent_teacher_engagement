const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Gradelevel = require("./gradelevel");

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
      allowNull: false,
      validate:{
        isEmail:true,
      }
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

Teacher.belongsToMany(Gradelevel,{
  through:"teacherGradelevel",
  constraints:false})
Gradelevel.belongsToMany(Teacher,{through:"teacherGradelevel"});

module.exports = Teacher;
