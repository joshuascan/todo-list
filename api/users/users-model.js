const db = require("../data/db-config");

async function add(user) {
  const [newUser] = await db("users").insert(user, ["user_id", "username"]);
  return newUser;
}

function findBy(filter) {
  return db("users").where(filter);
}

module.exports = { add, findBy };
