const router = require("express").Router();
const Notes = require("./notes-model");

router.get("/", (req, res, next) => {
  Notes.findAllNotes(req.decodedToken.subject)
    .then((notes) => {
      res.status(200).json(notes);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  req.body.user_id = req.decodedToken.subject;
  Notes.addNote(req.body)
    .then((note) => {
      res.status(201).json(note);
    })
    .catch(next);
});

router.put("/:note_id", (req, res, next) => {
  Notes.updateNote(req.decodedToken.subject, req.params.note_id, req.body)
    .then((note) => {
      res.status(200).json(note);
    })
    .catch(next);
});

router.delete("/:note_id", (req, res, next) => {
  Notes.removeNote(req.params.note_id)
    .then((note) => {
      res.status(200).json(note);
    })
    .catch(next);
});

module.exports = router;
