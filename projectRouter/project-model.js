const db = require("../data/config-db");

//method to get the projects (All)
function findProject() {
  return db("project");
}

module.exports = {
  findProject,
};
