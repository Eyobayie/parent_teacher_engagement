const { where } = require("sequelize");
const Parent = require("../models/parent");
const Teacher= require('../models/teacher');
const bcrypt = require('bcryptjs');


exports.parents = async (req, res) => {
  try {
    const parents = await Parent.findAll({
      attributes: {
        exclude: ['password']
      }
    });
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

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find parent or teacher user by username
    const parentUser = await Parent.findOne({
      where: { username: username },
    });

    const teacherUser = await Teacher.findOne({
      where: { username: username },
    });
    let user = parentUser || teacherUser;
    if(!parentUser){
      if(!teacherUser){
        res.status(404).json({message: "USER NOT FOUND"});
      }else{
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return res.status(401).json({ message: "Invalid username or password." });
        }else{
          console.log('LOGGED USER INFO IS',user);
          res.status(200).json(user);
        }
      }
    }else{
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid username or password." });
      }else{
        console.log('LOGGED USER INFO IS',user);
        res.status(200).json(user);
      }
    }
  } catch (error) {
    console.error('LOGIN ERROR IS', error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
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
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
      role: data.role,
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
    const parent = await Parent.findByPk(req.params.id, {
      attributes: {
        exclude: ['password'],
      },
    });

    if (!parent) {
      return res.status(404).json({
        success: false,
        message: "Parent is not available!",
      });
    }

    res.status(200).json({
      success: true,
      data: parent,
    });
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
        username: data.username,
        email: data.email,
        phone: data.phone,
        role: data.role,
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
