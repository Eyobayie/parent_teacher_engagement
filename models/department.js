const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Teacher = require("./teacher");

const Department = sequelize.define(
  "Department",
  {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    description:{
      type:DataTypes.STRING(300),
      allowNull:true,
    }
  },
  {
    timestamps: false,
  }
);

Department.belongsToMany(Teacher, {
  through:"departmentTeacher",
  constraints:false});
Teacher.belongsToMany(Department, {through:"departmentTeacher"});


module.exports = Department;
