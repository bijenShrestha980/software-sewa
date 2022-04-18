const KeyFeature = require("../models/KeyFeature");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newKeyFeature = new KeyFeature(req.body);

  try {
    const savedKeyFeature = await newKeyFeature.save();
    res.status(200).json(savedKeyFeature);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedKeyFeature = await KeyFeature.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedKeyFeature);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await KeyFeature.findByIdAndDelete(req.params.id);
    res.status(200).json("KeyFeature has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET KeyFeature
router.get("/find/:id", async (req, res) => {
  try {
    const keyFeature = await KeyFeature.findById(req.params.id);
    res.status(200).json(keyFeature);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL KeyFeature
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let keyFeatures;

    if (qNew) {
      keyFeatures = await KeyFeature.find().sort({ createdAt: -1 }).limit(1);
    } else {
      keyFeatures = await KeyFeature.find();
    }

    res.status(200).json(keyFeatures);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
