exports.seed = function (knex) {
  return knex("task").insert([
    {
      id: 1,
      task_description: "John will look at steel",
      task_notes: "He is an expert in wood tell him questions on steel",
      task_completed: false,
      project_id: 1,
    },
    {
      id: 2,
      task_description: "Mark will provide details",
      task_notes: "He is good with tables tell him about everything",
      task_completed: false,
      project_id: 2,
    },
  ]);
};
