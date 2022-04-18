const AboutBanner = require("../models/AboutBanner");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newAboutBanner = new AboutBanner(req.body);

  try {
    const savedAboutBanner = await newAboutBanner.save();
    res.status(200).json(savedAboutBanner);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedAboutBanner = await AboutBanner.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedAboutBanner);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await AboutBanner.findByIdAndDelete(req.params.id);
    res.status(200).json("AboutBanner has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET AboutBanner
router.get("/find/:id", async (req, res) => {
  try {
    const aboutBanner = await AboutBanner.findById(req.params.id);
    res.status(200).json(aboutBanner);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL AboutBanner
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let aboutBanners;

    if (qNew) {
      aboutBanners = await AboutBanner.find().sort({ createdAt: -1 }).limit(1);
    } else {
      aboutBanners = await AboutBanner.find();
    }

    res.status(200).json(aboutBanners);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
