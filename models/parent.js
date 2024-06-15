const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Student = require("./student");
const Help = require("./help");

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
    username: {
      type: DataTypes.STRING,
      allowNull:false
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
   rile:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:'parent',
   }
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);

// Parent.hasMany(Student,{constraints:false})
// Student.belongsTo(Parent);

// Parent.hasMany(Help,{constraints:false});
// Help.belongsTo(Parent);

module.exports = Parent;
