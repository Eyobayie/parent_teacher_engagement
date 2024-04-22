const Department = require("../models/department");

exports.departments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    if (!departments) {
      return res.status(200).json({
        success: true,
        message: "Department is not available!",
      });
    }
    res.status(200).json(departments);
  } catch (error) {
    console.log("Department ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a department name" });
    }
    await Department.create({ name: data.name, description: data.description });
    res.status(200).json({ success: true, message: "Department is created!" });
  } catch (error) {
    console.log("CREATE Department ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getDepartment = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(200).json({
        success: false,
        message: "Department is not available !!",
      });
    }
    res.status(200).json(department);
  } catch (error) {
    console.log("GET Department ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const departmnet = await Department.findByPk(req.params.id);
    if (!departmnet) {
      return res.status(200).json({
        success: false,
        message: "Department is not available!!!",
      });
    }
    await departmnet.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Department" });
    }
    await Department.update(
      { name: data.name, description:data.description },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE Department ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
