const Teacher = require("../models/teacher");
const Department = require("../models/department");
const Gradelevel = require("../models/gradelevel");
const Subject = require("../models/subject");

exports.teachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll({
      attributes:{
        exclude:['password'],
      }
    });
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
      username: data.username,
      email: data.email,
      phone: data.phone,
      role: data.role,
      password:data.password,
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
    const teacher = await Teacher.findByPk(req.params.id,{
      attributes: {
        exclude: ['password'],
      },
    });
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
    await teacher.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!" });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res
      .status(500)
      .json({ success: false, message: "INTERNAL SERVER ERROR!!!" });
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
        username: data.username,
        email: data.email,
        phone: data.phone,
        role: data.role,
        password:data.password,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE TEACHER ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL ERROR SERVER ",
    });
  }
};


exports.getTeacherDetails = async (req, res, next) => {
  try {
    const teacher = await Teacher.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Department,
          through: { attributes: [] }, // Exclude association attributes
          attributes: ["id", "name", "description"],
        },
        {
          model: Gradelevel,
          through: { attributes: [] }, // Exclude association attributes
          attributes: ["id", "grade", "description"], // Include grade description if needed
        },
        {
          model: Subject,
          through: { attributes: [] }, // Exclude association attributes
          attributes: ["id", "name", "description"],
        },
      ],
    });

    if (!teacher) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher is not available" });
    }
    
    return res.status(200).json(teacher);
  } catch (error) {
    console.error("Error fetching teacher details:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
