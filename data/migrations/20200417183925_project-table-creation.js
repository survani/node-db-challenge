exports.up = function (knex) {
  return (
    knex.schema
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
        //This will be one of my connection. "Foreign Key"
        //Will test this out, but I belive this should be good.
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("project")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      //important connection ("Foreign Key")
      .createTable("project_resource", (tbl) => {
        tbl.increments();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("project")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("task")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  );
};

// I did this to follow a down to up format when dropping the tables.
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
