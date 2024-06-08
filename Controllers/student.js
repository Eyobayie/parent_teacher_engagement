const Parent = require("../models/parent");
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

exports.getStudentPerSection = async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include:[Parent],
      where: {
        GradelevelId: req.params.gradeLevelId,
        SectionId: req.params.sectionId
      }
    });
    if (!students || students.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: "No students are available in this section!!!",
      });
    }
    res.status(200).json(students);
  } catch (error) {
    console.log("STUDENT PER SECTION ERROR IS...", error);
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
        .json({
           success: false, 
           message: "Please provide a parent info!" 
          });
    }
    await Student.create({
      firstname: data.firstname,
      email: data.email,
      phone: data.phone,
      ParentId:data.ParentId,
      GradelevelId:data.GradelevelId,
      SectionId:data.SectionId
    });
    console.log('STUDENT DATA IS ..............',data);
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
    await Student.update(
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
