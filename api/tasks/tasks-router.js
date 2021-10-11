const router = require("express").Router();
const Tasks = require("./tasks-model");

router.get("/:user_id", (req, res, next) => {
  Tasks.findAllTasks(req.params.user_id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/:user_id", (req, res, next) => {
  Tasks.addTask(req.params.user_id, req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.get("/completed", (req, res, next) => {
  Tasks.findAllCompletedTasks(req.params.user_id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.get("/archived", (req, res, next) => {
  Tasks.findAllArchivedTasks(req.params.user_id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

module.exports = router;
