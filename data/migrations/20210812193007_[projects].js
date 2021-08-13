exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments("project_id"); // primary key
      tbl.text("project_name", 128).unique().notNullable();
      tbl.text("project_description");
    //   tbl.boolean("project_completed").defaultTo(false).integer("0");
    })
    .createTable("task", (tbl) => {
      tbl.increments("task_id"); //primary key
      tbl.text("task_description").notNullable();
      tbl.text("task_notes").notNullable();
    //   tbl.boolean("task_completed").defaultTo(false).integer("0");
      tbl.text("project_id").notNullable().unsigned().notNullable();
    })
    .createTable("resource", (tbl) => {
      tbl.increments("resource_id").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfexists("projects")
    .dropTableIfexists("task")
    .dropTableIfexists("resource");
};
