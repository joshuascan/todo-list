exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        { name: "PlayStation 5", completed: false, list_id: 1 },
        { name: "iPhone", completed: false, list_id: 1 },
        { name: "LG CX", completed: false, list_id: 1 },
        { name: "Noodles", completed: false, list_id: 2 },
        { name: "Oreos", completed: false, list_id: 2 },
      ]);
    });
};
