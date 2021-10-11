exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          name: "Clean kitchen",
          completed: false,
          moveFromArchive: false,
          user_id: 1,
        },
        {
          name: "Update resume",
          completed: false,
          moveFromArchive: false,
          user_id: 1,
        },
        {
          name: "Vacuum living room",
          completed: false,
          moveFromArchive: false,
          user_id: 1,
        },
      ]);
    });
};
