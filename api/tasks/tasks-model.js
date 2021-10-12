const db = require("../data/db-config");

function findAllTasks(user_id) {
  return db("tasks").where("user_id", user_id);
}

async function addTask(user_id, task) {
  const [newTask] = await db("tasks").insert(
    {
      user_id: user_id,
      name: task.name,
    },
    ["user_id", "task_id", "name", "completed", "moveFromArchive"]
  );
  return newTask;
}

function findAllCompletedTasks(user_id) {
  return db("completedTasks").where("user_id", user_id);
}

function findAllArchivedTasks(user_id) {
  return db("archived").where("user_id", user_id);
}

module.exports = {
  findAllTasks,
  addTask,
  findAllCompletedTasks,
  findAllArchivedTasks,
};
