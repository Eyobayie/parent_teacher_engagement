const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Parent = sequelize.define(
  "Parent",
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

Parent.hasMany(Student,{constraints:false})
Student.belongsTo(Parent);

module.exports = Parent;
