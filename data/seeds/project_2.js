exports.seed = function (knex) {
  //no need for .del() because of cleanup seed...
  return knex("project").insert([
    {
      id: 1,
      project_name: "Make a Steel Table",
      project_description: "Make a beautiful steel table",
      project_completed: false,
    },
    {
      id: 2,
      project_name: "Make House",
      project_description: "Make a beauitful home",
      project_completed: false,
    },
  ]);
};
