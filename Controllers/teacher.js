const Teacher = require("../models/teacher");

exports.teachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    if (!teachers) {
      return res.status(200).json({
        success: true,
        message: "Teacher is not available!",
      });
    }
    res.status(200).json(teachers);
  } catch (error) {
    console.log("TEACHER ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
exports.createTeacher = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a Teacher name" });
    }
    await Teacher.create({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
    });
    res.status(200).json({ success: true, message: "Teacher is created!" });
  } catch (error) {
    console.log("CREATE Teacher ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) {
      return res
        .status(200)
        .json({ success: false, message: "Teacher is not available!" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    console.log("GET Teacher ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) {
      return res
        .status(200)
        .json({ success: false, message: "Teacher is not available" });
    }
    await Teacher.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!" });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
exports.updateTeacher = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Teacher" });
    }
    await Teacher.update(
      {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE Teacher ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
