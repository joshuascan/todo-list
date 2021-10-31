const router = require("express").Router();
const Tasks = require("./tasks-model");

router.get("/", (req, res, next) => {
  Tasks.findAllTasks(req.decodedToken.subject)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.addTask(req.decodedToken.subject, req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.get("/archived", (req, res, next) => {
  Tasks.findAllArchivedTasks(req.decodedToken.subject)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/archived", (req, res, next) => {
  Tasks.addToArchive(req.decodedToken.subject, req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
