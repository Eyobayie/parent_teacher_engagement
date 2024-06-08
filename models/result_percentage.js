const { sequelize } = require("../db");
const { DataTypes, Op } = require("sequelize");

const ResultPercentage = sequelize.define(
  "ResultPercentage",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    percentage: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    academicYearId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'AcademicYear',
        key: 'id',
      },
      allowNull: false,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Adding a hook to check the sum of percentage before creating or updating a record
ResultPercentage.addHook('beforeValidate', async (resultPercentage, options) => {
  const totalPercentage = await ResultPercentage.sum('percentage', {
    where: {
      academicYearId: resultPercentage.academicYearId,
      id: { [Op.not]: resultPercentage.id } // Exclude the current record if updating
    }
  });
  if (totalPercentage + resultPercentage.percentage > 100) {
    throw new Error("The sum of percentage values for the academic year cannot exceed 100");
  }
});

module.exports = ResultPercentage;
