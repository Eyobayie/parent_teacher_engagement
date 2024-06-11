const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const StudentResult = require("./student_result"); // Correctly import StudentResult

const Semister = sequelize.define(
  "Semister",
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
    freezeTableName: true,
  }
);

// Semister.hasMany(StudentResult, { foreignKey: 'SemisterId', constraints:false });
// StudentResult.belongsTo(Semister);

module.exports = Semister;
