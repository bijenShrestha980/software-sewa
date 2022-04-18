const Work = require("../models/Work");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newWork = new Work(req.body);

  try {
    const savedWork = await newWork.save();
    res.status(200).json(savedWork);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedWork = await Work.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWork);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Work.findByIdAndDelete(req.params.id);
    res.status(200).json("Work has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET WORK
router.get("/find/:id", async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    res.status(200).json(work);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL WORK
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let works;

    if (qNew) {
      works = await Work.find().sort({ createdAt: -1 }).limit(1);
    } else {
      works = await Work.find();
    }

    res.status(200).json(works);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
