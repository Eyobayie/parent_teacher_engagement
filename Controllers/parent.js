const Parent = require("../models/parent");

exports.parents = async (req, res) => {
  try {
    const parents = await Parent.findAll();
    if (!parents) {
      return res.status(200).json({
        success: true,
        message: "Parent is not available!!!",
      });
    }
    res.status(200).json(parents);
  } catch (error) {
    console.log("TEACHER ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
exports.createParent = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a parent info!" });
    }
    await Parent.create({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
    });
    res.status(200).json({ success: true, message: "Parent is registered!" });
  } catch (error) {
    console.log("PARENT REGISTRATION ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getParent = async (req, res) => {
  try {
    const parent = await Parent.findByPk(req.params.id);
    if (!parent) {
      return res
        .status(200)
        .json({ success: false, message: "Parent is not available!" });
    }
    res.status(200).json(parent);
  } catch (error) {
    console.log("GET PARENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteParent = async (req, res) => {
  try {
    const parent = await Parent.findByPk(req.params.id);
    if (!parent) {
      return res
        .status(200)
        .json({ success: false, message: "Parent is not available" });
    }
    await parent.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!" });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
exports.updateParent = async (req, res) => {
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
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE PARENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
