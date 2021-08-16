// build your `Project` model here
const db = require("../../data/dbConfig");

async function get() {
  const result = await db("projects");
  // for each project that enters the legitimate parameter, we operate a ternary operator.
  result.forEach((proyecto) => {
   proyecto.project_completed = proyecto.project_completed === 1 ? true : false;
  });

  return result;
}




async function create(post) {
  const project_id = await db("projects").insert(post);
  const result = await db("projects") // waiting for new outcome
  .where({ project_id }).first(); 

  result.project_completed = result.project_completed === 1 ? true : false; // ternary operator taking action with new result
  return result;
}

module.exports = { get, create };