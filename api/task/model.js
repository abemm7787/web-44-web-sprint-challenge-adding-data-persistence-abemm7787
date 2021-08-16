// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = { get, create };

async function get() {


  const result = await db
  .select("tasks.*", "projects.*")
    .from("tasks")
    .join("projects", "tasks.project_id", "=", "projects.project_id");
  result.forEach((responsive) => { responsive.task_completed = responsive.task_completed === 1 ? true : false;
  })
  ;
  return result;
  
}

async function create(task) {
  const newtasks = await db("tasks").insert(task);
  const result = await db 
    .from("tasks")
    .join("projects", "tasks.project_id", "=", "projects.project_id")
    .where({newtasks})
    .first();
  result.task_completed = result.task_completed === 1 ? true : false;
  return result;
}