const { sequelize } = require("../db");
const { DataTypes, Op } = require("sequelize");
const ResultPercentage = require("./result_percentage");

const StudentResult = sequelize.define(
  "StudentResult",
  {
 
    result: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ResultType: {
      type: DataTypes.ENUM('midterm', 'final', 'assignment'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

StudentResult.addHook('beforeValidate', async (studentResult, options) => {
  console.log("StudentResult data:", studentResult);

  const resultPercentage = await ResultPercentage.findOne({
    where: { 
      id: studentResult.ResultPercentageId, 
      academicYearId: studentResult.AcademicYearId,
      semisterId: studentResult.SemisterId,
    }
  });

  if (!resultPercentage) {
    console.log("ResultPercentage not found:", {
      ResultPercentageId: studentResult.ResultPercentageId,
      AcademicYearId: studentResult.AcademicYearId,
      SemisterId: studentResult.SemisterId
    });
    throw new Error("ResultPercentage not found for the given academic year and semester");
  }

  const totalResult = await StudentResult.sum('result', {
    where: {
      AcademicYearId: studentResult.AcademicYearId,
      SemisterId: studentResult.SemisterId,
      StudentId: studentResult.StudentId,
      SubjectId: studentResult.SubjectId,
      ResultType: studentResult.ResultType,
      id: { [Op.not]: studentResult.id }
    }
  });

  if ((totalResult || 0) + studentResult.result > resultPercentage.percentage) {
    throw new Error("The cumulative result percentage for the student in this semester exceeds the allowed percentage for the academic year and semester");
  }
});


module.exports = StudentResult;
