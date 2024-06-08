const Attendance = require("../models/attendance");

exports.attendances = async (req, res) => {
  try {
    const attendances = await Attendance.findAll({
      where: {
        StudentId: req.params.studentId,
      },
    });
    if (!attendances) {
      return res.status(200).json({
        success: true,
        message: "Attendances is not available!",
      });
    }
    res.status(200).json(attendances);
  } catch (error) {
    console.log("ATTENDANCE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createAttendance = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({
          success: false,
          message: "Please provide a attendance details",
        });
    }
    await Attendance.create({
      date: data.date,
      isPresent: data.isPresent,
      StudentId: data.StudentId,
      TeacherId: data.TeacherId,
    });
    res.status(200).json({ success: true, message: "Attendance is created!!!" });
  } catch (error) {
    console.log("CREATE Department ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);
    if (!attendance) {
      return res.status(200).json({
        success: false,
        message: "Attendance is not available!!!",
      });
    }
    res.status(200).json(attendance);
  } catch (error) {
    console.log("GET ATTENDACNE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);
    if (!departmnet) {
      return res.status(200).json({
        success: false,
        message: "Attencance is not available!!!",
      });
    }
    await attendance.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Attencance" });
    }
    await Attendance.update(
      { date: data.date, isPresent: data.isPresent },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE ATTENDANCE ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
