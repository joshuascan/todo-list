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

async function addTasks(tasks) {
  const newTask = await db("tasks").insert(tasks, [
    "user_id",
    "task_id",
    "name",
    "completed",
    "moveFromArchive",
  ]);
  if (newTask.length === 1) {
    const [singleTask] = newTask;
    return singleTask;
  } else return newTask;
}

async function updateTask(user_id, task_id, task) {
  const [updatedTask] = await db("tasks")
    .update(
      {
        name: task.name,
        completed: task.completed,
        moveFromArchive: task.moveFromArchive,
      },
      ["task_id", "name", "completed", "moveFromArchive"]
    )
    .where({ user_id: user_id, task_id: task_id });
  return updatedTask;
}

async function removeTask(task_id) {
  const [removedTask] = await db("tasks")
    .del(["task_id", "name", "user_id"])
    .where("task_id", task_id);
  return removedTask;
}

async function clearCompleted(user_id) {
  const clearedTasks = await db("tasks")
    .del(["name", "task_id", "completed"])
    .where({ user_id: user_id, completed: true });
  return clearedTasks;
}

function findAllArchivedTasks(user_id) {
  return db("archived").where("user_id", user_id);
}

async function addToArchive(tasks) {
  const newTasks = await db("archived").insert(tasks, [
    "user_id",
    "task_id",
    "name",
    "completed",
    "moveFromArchive",
  ]);
  return newTasks;
}

async function deleteFromArchive(user_id, taskIds) {
  const deletedTasks = await db("archived")
    .del(["name", "task_id", "completed"])
    .whereIn("task_id", taskIds)
    .andWhere("user_id", user_id);
  return deletedTasks;
}

module.exports = {
  findAllTasks,
  findById,
  addTasks,
  updateTask,
  removeTask,
  clearCompleted,
  findAllArchivedTasks,
  addToArchive,
  deleteFromArchive,
};
