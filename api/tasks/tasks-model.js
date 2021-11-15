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
    .update(
      {
        user_id: user_id,
        name: task.name,
        completed: task.completed,
        moveFromArchive: task.moveFromArchive,
      },
      ["user_id", "task_id", "name", "completed", "moveFromArchive"]
    )
    .where("task_id", task_id);
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

async function addToArchive(user_id, tasks) {
  const archivedTasks = tasks.map((task) => {
    task.user_id = user_id;
  });
  const newTasks = await db("archived").insert(archivedTasks, [
    "user_id",
    "task_id",
    "name",
    "completed",
    "moveFromArchive",
  ]);
  return newTasks;
}

async function clearArchive(user_id) {
  const deletedTasks = await db("archived")
    .del(["name", "task_id"])
    .where("user_id", user_id);
  return deletedTasks;
}

module.exports = {
  findAllTasks,
  findById,
  addTask,
  updateTask,
  removeTask,
  clearCompleted,
  findAllArchivedTasks,
  addToArchive,
  clearArchive,
};
