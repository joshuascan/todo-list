exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("notes").insert([
        {
          title: "Doges",
          body: "Woof woof bork bork woof woof bork bork. Woof woof bork bork woof woof bork bork.",
          user_id: 1,
        },
        {
          title: "Meowsters",
          body: "Meow meow meow-meow. Meow meow meow-meow. Meow meow meow-meow. Meow meow meow-meow.",
          user_id: 1,
        },
      ]);
    });
};
