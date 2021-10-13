const router = require("express").Router();
const Tasks = require("./tasks-model");

router.get("/", (req, res, next) => {
  Tasks.findAllTasks(1)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.addTask(1, req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.get("/archived", (req, res, next) => {
  Tasks.findAllArchivedTasks(1)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

module.exports = router;
