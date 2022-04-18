const Mission = require("../models/Mission");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newMission = new Mission(req.body);

  try {
    const savedMission = await newMission.save();
    res.status(200).json(savedMission);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedMission = await Mission.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMission);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Mission.findByIdAndDelete(req.params.id);
    res.status(200).json("Mission has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Mission
router.get("/find/:id", async (req, res) => {
  try {
    const mission = await Mission.findById(req.params.id);
    res.status(200).json(mission);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Mission
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let mission;

    if (qNew) {
      mission = await Mission.find().sort({ createdAt: -1 }).limit(1);
    } else {
      mission = await Mission.find();
    }

    res.status(200).json(mission);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
