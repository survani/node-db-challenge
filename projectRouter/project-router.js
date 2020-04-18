express = require("express");

//will need this to be able to use the model for this and all routes
const projectHelper = require("./project-model");

const router = express.Router();

router.get("/", async (req, res) => {
  const allProjects = await projectHelper.findProject();
  try {
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json("Big error");
  }
});

module.exports = router;
