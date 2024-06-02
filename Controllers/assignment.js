const Assignment = require("../models/assignment");

exports.assignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll();
    if (!assignments) {
      return res.status(200).json({
        success: false,
        message: "Assignment is not available!",
      });
    }
    res.status(200).json(assignments);
  } catch (error) {
    console.log("ASSIGNMET ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createAssignment = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({
          success: false,
          message: "Please provide a assignment details",
        });
    }
    await Assignment.create({
      title:data.title,
      description:data.description,
      givenDate:data.givenDate,
      endDate:data.endDate,
      isDone:false,
    });
    res.status(200).json({ success: true, message: "Assignment is posted!" });
  } catch (error) {
    console.log("CREATE ASSIGNMENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByPk(req.params.id);
    if (!assignment) {
      return res.status(200).json({
        success: false,
        message: "Attendance is not available!!!",
      });
    }
    res.status(200).json(assignment);
  } catch (error) {
    console.log("GET ASSIGNMENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByPk(req.params.id);
    if (!assignment) {
      return res.status(200).json({
        success: false,
        message: "Attencance is not available!!!",
      });
    }
    await assignment.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE ASSIGNMENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Attencance" });
    }
    await Assignment.update(
      {
         title: data.date,
        description: data.description,
        isDone:data.isDone,
        givenDate:data.givenDate,
        endDate:data.endDate,
     },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE ASSIGNMENT ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
