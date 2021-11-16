const db = require("../data/db-config");

function findAllNotes(user_id) {
  return db("tasks").where("user_id", user_id);
}

async function addNote(note) {
  const [newNote] = await db("tasks").insert(note, [
    "note_id",
    "title",
    "body",
  ]);
  return newNote;
}

async function updateNote(user_id, note_id, note) {
  const [updatedNote] = await db("notes")
    .update(
      {
        ...note,
        user_id: user_id,
      },
      ["note_id", "title", "body"]
    )
    .where("note_id", note_id);
  return updatedNote;
}

async function removeNote(note_id) {
  const [removedNote] = await db("notes")
    .del(["note_id", "title", "body"])
    .where("note_id", note_id);
  return removedNote;
}

module.exports = {
  findAllNotes,
  addNote,
  updateNote,
  removeNote,
};
