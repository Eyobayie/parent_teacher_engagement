
const StudentResult = require("../models/student_result");
const AcademicYear = require("../models/academicYear");
const Semister = require("../models/semister");
const Subject = require("../models/subject");
const Student = require("../models/student");
const ResultPercentage = require("../models/result_percentage");
const { where } = require("sequelize");

exports.getResults = async (req, res) => {
  try {
    const results = await StudentResult.findAll({
      where: {
        StudentId: req.params.studentId,
      },
      include: [
        {
          model: AcademicYear,
          attributes: ['id', 'year'] // Adjust attributes as needed
        },
        {
          model: Semister,
          attributes: ['id', 'name'] // Adjust attributes as needed
        },
        {
          model: Subject,
          attributes: ['id', 'name'] // Adjust attributes as needed
        },
        {
          model: Student,
          attributes: ['id', 'firstname'] // Adjust attributes as needed
        },
        {
          model: ResultPercentage,
          attributes: ['id', 'name', 'percentage'] // Adjust attributes as needed
        }
      ],
      attributes: {
        exclude: ['AcademicYearId', 'SemisterId', 'SubjectId', 'StudentId', 'ResultPercentageId']
      }
    });

    if (!results.length) {
      return res.status(200).json({
        success: true,
        message: "No results found for the student.",
      });
    }
    res.status(200).json(results);
  } catch (error) {
    console.log("Error fetching results: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


exports.createResult = async (req, res) => {
  const { result, ResultType, ResultPercentageId, AcademicYearId, SemisterId, SubjectId } = req.body;

  try {
    console.log("STUDENT RESULT IS....", req.body);
    if (!result || !ResultType || !ResultPercentageId || !AcademicYearId || !SemisterId || !SubjectId) {
      return res.status(400).json({
        success: false,
        message: "Please provide all result details.",
      });
    }
    const studentId = req.params.studentId;

    const newResult = await StudentResult.create({
      result: result,
      ResultType: ResultType,
      ResultPercentageId: ResultPercentageId,
      AcademicYearId: AcademicYearId,
      SemisterId: SemisterId,
      SubjectId: SubjectId,
      StudentId: studentId

    });

    res.status(200).json({ success: true, message: "Result created successfully!", result: newResult });
  } catch (error) {
    console.log("Error creating result: ", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

exports.getResult = async (req, res) => {
  try {
    const result = await StudentResult.findByPk(req.params.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found.",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log("Error fetching result: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.deleteResult = async (req, res) => {
  try {
    const result = await StudentResult.findByPk(req.params.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found.",
      });
    }
    await result.destroy();
    res.status(200).json({ success: true, message: "Result deleted successfully!" });
  } catch (error) {
    console.log("Error deleting result: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.updateResult = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Please provide result details to update.",
      });
    }
    const result = await StudentResult.findByPk(req.params.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found.",
      });
    }
    await result.update(data);
    res.status(200).json({ success: true, message: "Result updated successfully!" });
  } catch (error) {
    console.log("Error updating result: ", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
