const db = require("../data/db-config");

function findAllTasks(user_id) {
  return db("tasks").where("user_id", user_id);
}

function findById(user_id, task_id) {
  return db("tasks")
    .where("user_id", user_id)
    .andWhere("task_id", task_id)
    .first();
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

async function updateTask(user_id, task_id, task) {
  const [updatedTask] = await db("tasks")
    .update({ user_id: user_id, name: task.name }, [
      "user_id",
      "task_id",
      "name",
      "completed",
      "moveFromArchive",
    ])
    .where("task_id", task_id);
  return updatedTask;
}

function findAllArchivedTasks(user_id) {
  return db("archived").where("user_id", user_id);
}

async function addToArchive(user_id, task) {
  const [newTask] = await db("archived").insert(
    {
      user_id: user_id,
      name: task.name,
    },
    ["user_id", "task_id", "name", "completed", "moveFromArchive"]
  );
  return newTask;
}

module.exports = {
  findAllTasks,
  findById,
  addTask,
  updateTask,
  findAllArchivedTasks,
  addToArchive,
};
