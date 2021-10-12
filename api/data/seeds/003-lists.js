exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("lists")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("lists").insert([
        { name: "Electronics", user_id: 1 },
        { name: "Groceries", user_id: 1 },
      ]);
    });
};
