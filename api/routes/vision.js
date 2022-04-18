const Vision = require("../models/Vision");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newVision = new Vision(req.body);

  try {
    const savedVision = await newVision.save();
    res.status(200).json(savedVision);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedVision = await Vision.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedVision);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Vision.findByIdAndDelete(req.params.id);
    res.status(200).json("Vision has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Vision
router.get("/find/:id", async (req, res) => {
  try {
    const vision = await Vision.findById(req.params.id);
    res.status(200).json(vision);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Vision
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let vision;

    if (qNew) {
      vision = await Vision.find().sort({ createdAt: -1 }).limit(1);
    } else {
      vision = await Vision.find();
    }

    res.status(200).json(vision);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
