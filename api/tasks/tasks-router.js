const router = require("express").Router();
const Tasks = require("./tasks-model");

// TASK ENDPOINTS

router.get("/", (req, res, next) => {
  Tasks.findAllTasks(req.decodedToken.subject)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

// router.get("/:task_id", (req, res, next) => {
//   Tasks.findById(req.decodedToken.subject, req.params.task_id)
//     .then((task) => {
//       res.status(200).json(task);
//     })
//     .catch(next);
// });

router.post("/", (req, res, next) => {
  Tasks.addTask(req.decodedToken.subject, req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.put("/:task_id", (req, res, next) => {
  Tasks.updateTask(req.decodedToken.subject, req.params.task_id, req.body)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.delete("/:task_id", (req, res, next) => {
  Tasks.removeTask(req.params.task_id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.delete("/", (req, res, next) => {
  Tasks.clearCompleted(req.decodedToken.subject)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

// ARCHIVE ENDPOINTS

router.get("/archived", (req, res, next) => {
  Tasks.findAllArchivedTasks(req.decodedToken.subject)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/archived", (req, res, next) => {
  const addedTasks = req.body;
  const newArchivedTasks = addedTasks.map((task) => ({
    ...task,
    user_id: req.decodedToken.subject,
  }));
  console.log(newArchivedTasks);
  Tasks.addToArchive(newArchivedTasks)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.delete("/archived", (req, res, next) => {
  Tasks.clearArchive(req.decodedToken.subject)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

module.exports = router;
