exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("archived")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("archived").insert([
        {
          name: "Buy shoes",
          completed: true,
          moveFromArchive: false,
          user_id: 1,
        },
        {
          name: "Wash car",
          completed: true,
          moveFromArchive: false,
          user_id: 1,
        },
        {
          name: "Empty refrigerator",
          completed: true,
          moveFromArchive: false,
          user_id: 1,
        },
      ]);
    });
};
