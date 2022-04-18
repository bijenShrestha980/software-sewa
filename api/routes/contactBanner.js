const ContactBanner = require("../models/ContactBanner");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newContactBanner = new ContactBanner(req.body);

  try {
    const savedContactBanner = await newContactBanner.save();
    res.status(200).json(savedContactBanner);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedContactBanner = await ContactBanner.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedContactBanner);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ContactBanner.findByIdAndDelete(req.params.id);
    res.status(200).json("ContactBanner has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ContactBanner
router.get("/find/:id", async (req, res) => {
  try {
    const contactBanner = await ContactBanner.findById(req.params.id);
    res.status(200).json(contactBanner);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ContactBanner
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let contactBanners;

    if (qNew) {
      contactBanners = await ContactBanner.find()
        .sort({ createdAt: -1 })
        .limit(1);
    } else {
      contactBanners = await ContactBanner.find();
    }

    res.status(200).json(contactBanners);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
