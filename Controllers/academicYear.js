const AcademicYear = require("../models/academicYear");

exports.academicyears = async (req, res) => {
  try {
    const academicyears = await AcademicYear.findAll();
    if (!academicyears) {
      return res.status(200).json({
        success: true,
        message: "Academic Year is not available!",
      });
    }
    res.status(200).json(academicyears);
  } catch (error) {
    console.log("ACADEMIC YEAR ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createAcademicYear = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a academic year" });
    }
    await AcademicYear.create({ year: data.year, description: data.description });
    res.status(200).json({ success: true, message: "Academic Year is created!" });
  } catch (error) {
    console.log("CREATE ACADEMIC YEAR ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getAcademicYear = async (req, res) => {
  try {
    const academicYear = await AcademicYear.findByPk(req.params.id);
    if (!academicYear) {
      return res.status(200).json({
        success: false,
        message: "academic Year is not available !!",
      });
    }
    res.status(200).json(academicYear);
  } catch (error) {
    console.log("GET ACADEMIC YEAR ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteAcademicYear = async (req, res) => {
  try {
    const academicYear = await AcademicYear.findByPk(req.params.id);
    if (!academicYear) {
      return res.status(200).json({
        success: false,
        message: "Academic year is not available!!!",
      });
    }
    await academicYear.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE ACADEMIC YEAR ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateAcademicYear = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Academic Year" });
    }
    await AcademicYear.update(
      { year: data.year, description:data.description },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE ACADEMIC ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
