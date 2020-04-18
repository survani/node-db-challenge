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

function findTask(taskId) {
  return db("task")
    .join("project", "project.id", "task.project_id")
    .where("task.project_id", taskId)
    .select("project.project_name", "project.project_description", "task.*");
}

module.exports = {
  findProject,
  addProject,
  findResource,
  addResource,
  findTask,
};
