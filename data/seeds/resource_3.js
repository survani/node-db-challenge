exports.seed = function (knex) {
  //no need for .del() because of cleanup seed...
  return knex("resource").insert([
    {
      id: 1,
      resource_name: "John",
      description: "He is an expert in steel",
    },
    {
      id: 2,
      resource_name: "Mark",
      description: "He is an expert in creating tables",
    },
    {
      id: 3,
      resource_name: "Garage",
      description:
        "A garage provides a good amount of space to work on creating the table",
    },
  ]);
};
