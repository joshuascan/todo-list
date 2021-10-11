exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { name: "Clean kitchen", completed: false, moveFromArchive: false },
        { name: "Update resume", completed: false, moveFromArchive: false },
        {
          name: "Vacuum living room",
          completed: false,
          moveFromArchive: false,
        },
      ]);
    });
};
