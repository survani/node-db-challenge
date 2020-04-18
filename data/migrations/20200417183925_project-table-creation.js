exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 128).unique().notNullable();
      tbl.string("project_description", 128);
      tbl.boolean("project_completed").notNullable().defaultTo(false);
    })
    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.string("resource_name", 128).unique().notNullable();
      tbl.string("description", 128);
    })
    .createTable("task", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 128).notNullable();
      tbl.string("task_notes", 128);
      tbl.boolean("task_completed").notNullable().defaultTo(false);
    });
};

exports.down = function (knex) {
  //Will add this once I am done with the creation of the tables above
  //still missing foreign keys here. Looking to see how to organize them...
};
