const { Model, where } = require("sequelize");
const Gradelevel = require("../models/gradelevel");
const Section = require("../models/section");

exports.gradelevels = async (req, res) => {
  try {
    const gradelevels = await Gradelevel.findAll();
    if (!gradelevels) {
      return res.status(200).json({
        success: true,
        message: "Gradelevel is not available!",
      });
    }
    res.status(200).json(gradelevels);
  } catch (error) {
    console.log("Gradelevel ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
exports.createGradelevel = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a Gradelevel name" });
    }
    await Gradelevel.create({
      grade: data.grade,
      description: data.description,
    });
    res.status(200).json({ success: true, message: "Gradelevel is created!" });
  } catch (error) {
    console.log("CREATE Gradelevel ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getGradelevel = async (req, res) => {
  try {
    const gradelevel = await Gradelevel.findByPk(req.params.id);
    if (!gradelevel) {
      return res
        .status(200)
        .json({ success: false, message: "Gradelevel is not available!" });
    }
    res.status(200).json(gradelevel);
  } catch (error) {
    console.log("GET Gradelevel ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteGradelevel = async (req, res) => {
  try {
    const gradelevel = await Gradelevel.findByPk(req.params.id);
    if (!gradelevel) {
      return res
        .status(200)
        .json({ success: false, message: "Gradelevel is not available" });
    }
    await gradelevel.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!" });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
exports.updateGradelevel = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Gradelevel" });
    }
    await Gradelevel.update(
      { grade: data.grade, description: data.description },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE Gradelevel ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};

exports.getGradelevelWithSections = async (req, res) => {
  try {
    const grade = await Gradelevel.findOne({
      where: { id: req.params.id },
      include: Section,
    });

    if (!grade) {
      return res.status(404).json({
        success: false,
        message: "Grade with sections is not available!!!",
      });
    }

    res.status(200).json({ grade });
  } catch (error) {
    console.log("GRADE WITH SECTION ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
