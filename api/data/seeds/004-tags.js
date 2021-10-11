exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tags")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tags").insert([
        { name: "Digital", list_id: 1 },
        { name: "Computers", list_id: 1 },
        { name: "Food", list_id: 2 },
        { name: "Snacks", list_id: 2 },
        { name: "Beverages", list_id: 2 },
      ]);
    });
};
