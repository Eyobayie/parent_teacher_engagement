const Announcement = require("../models/announcement");

exports.announcementS = async (req, res) => {
  try {
    const announcement = await Announcement.findAll();
    if (!announcement) {
      return res.status(200).json({
        success: true,
        message: "Announcement is not available!",
      });
    }
    res.status(200).json(announcement);
  } catch (error) {
    console.log("DE[ARTMENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createAnnouncement = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(200).json({
        success: false,
        message: "Please provide a announcement detail",
      });
    }
    await Department.create({
      date: data.date,
      description: data.description,
      title: data.title,
    });
    res
      .status(200)
      .json({ success: true, message: "Announcement is created!" });
  } catch (error) {
    console.log("CREATE Department ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByPk(req.params.id);
    if (!announcement) {
      return res.status(200).json({
        success: false,
        message: "Announcement is not available !!",
      });
    }
    res.status(200).json(announcement);
  } catch (error) {
    console.log("GET ANNOUNCEMENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByPk(req.params.id);
    if (!departmnet) {
      return res.status(200).json({
        success: false,
        message: "Announcement is not available!!!",
      });
    }
    await departmnet.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE ANNOUNCEMENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateAnnouncement = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Department" });
    }
    await Announcement.update(
      {
        date: data.date,
        description: data.description,
        title: data.announcement,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE ANNOUNCEMENT ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
