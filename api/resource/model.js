// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = { get, create };

function get() {
  return db("resources");
}

async function create(resources) {
  const resource_id = await db("resources").insert(resources);
  return await db
    .select("resource_name") .from("resources").where({ resource_id }).first();
}