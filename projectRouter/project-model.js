const db = require("../data/config-db");

//method to get the projects (All)
function findProject() {
  return db("project");
}

function addProject(body) {
  return db("project").insert(body);
}

function findResource() {
  return db("resource");
}

function addResource(body) {
  return db("resource").insert(body);
}

module.exports = {
  findProject,
  addProject,
  findResource,
  addResource,
};
