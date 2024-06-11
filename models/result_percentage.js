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
    },
    semisterId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Semister',
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
      semisterId: resultPercentage.semisterId,
      id: { [Op.not]: resultPercentage.id } // Exclude the current record if updating
    }
  });
  if (totalPercentage + resultPercentage.percentage > 100) {
    throw new Error("The sum of percentage values for the academic year cannot exceed 100");
  }
});

// ResultPercentage.hasMany(StudentResult, { foreignKey: 'ResultPercentageId', constraints:false })
// StudentResult.belongsTo(AcademicYear);
// AcademicYear.hasMany(ResultPercentage, { foreignKey: 'academicYearId', constraints: false });
// ResultPercentage.belongsTo(AcademicYear, { foreignKey: 'academicYearId', as: 'academicYear' });

// ResultPercentage.hasMany(StudentResult, { foreignKey: 'resultPercentageId', constraints: false });
// StudentResult.belongsTo(ResultPercentage, { foreignKey: 'resultPercentageId' });

module.exports = ResultPercentage;
