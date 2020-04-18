express = require("express");

//will need this to be able to use the model for this and all routes
const projectHelper = require("./project-model");

const router = express.Router();

//get request to obtain all projects
router.get("/", async (req, res) => {
  const allProjects = await projectHelper.findProject();
  try {
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json("Big error");
  }
});

router.post("/", async (req, res) => {
  const changes = req.body;
  const addProjects = await projectHelper.addProject(changes);
  try {
    res.status(201).json(addProjects);
  } catch (error) {
    res.status(500).json("error");
  }
});

module.exports = router;
