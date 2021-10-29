const db = require("../data/db-config");

async function add(user) {
  const [newUser] = await db("users").insert(user, ["user_id", "username"]);
  return newUser;
}

module.exports = { add };
