const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const Assignment = require("./assignment");
const StudentResult = require("./student_result");

const Subject = sequelize.define(
  "Subject",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);

// Subject.hasMany(Assignment,{constraints:false});
// Assignment.belongsTo(Subject);

// Subject.hasMany(StudentResult,{ foreignKey: 'SubjectId' });
// StudentResult.belongsTo(Subject);

module.exports = Subject;
