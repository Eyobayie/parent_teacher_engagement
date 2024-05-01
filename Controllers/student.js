const Gradelevel = require("../models/gradelevel");
const Student = require("../models/student");

exports.students = async (req, res) => {
  try {
    const students = await Student.findAll();
    if (!students) {
      return res.status(200).json({
        success: true,
        message: "Student is not available!!!",
      });
    }
    res.status(200).json(students);
  } catch (error) {
    console.log("STUDENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createsStudent = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a parent info!" });
    }
    await Parent.create({
      firstname: data.firstname,
      email: data.email,
      phone: data.phone,
      ParentId:data.ParentId,
      GradelevelId:data.GradelevelId,
      SectionId:data.SectionId
    });
    res.status(200).json({ success: true, message: "Student is registered!" });
  } catch (error) {
    console.log("STUDENT REGISTRATION ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res
        .status(200)
        .json({ success: false, message: "Student is not available!" });
    }
    res.status(200).json(student);
  } catch (error) {
    console.log("GET STUDENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res
        .status(200)
        .json({ success: false, message: "Student is not available" });
    }
    await student.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!" });
  } catch (error) {
    console.log("DELETE STUDENT ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert parent" });
    }
    await Parent.update(
      {
        firstname: data.firstname,
        email: data.email,
        phone: data.phone,
        ParentId:data.ParentId,
        Gradelevel:data.GradelevelId,
        SectionId:data.SectionId
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE STUDNET ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
