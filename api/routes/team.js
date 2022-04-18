const Team = require("../models/Team");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newTeam = new Team(req.body);

  try {
    const savedTeam = await newTeam.save();
    res.status(200).json(savedTeam);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTeam);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json("Team has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Team
router.get("/find/:id", async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    res.status(200).json(team);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Team
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let teams;

    if (qNew) {
      teams = await Team.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      teams = await Team.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      teams = await Team.find();
    }

    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
