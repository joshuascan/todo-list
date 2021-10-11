exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 25).unique().notNullable();
      users.string("password").notNullable();
    })
    .createTable("tasks", (tasks) => {
      tasks.increments("task_id");
      tasks.string("name", 30).notNullable();
      tasks.boolean("completed").defaultTo(false);
      tasks.boolean("moveFromArchive").defaultTo(false);
      tasks
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("completedTasks", (completedTasks) => {
      completedTasks.increments("task_id");
      completedTasks.string("name", 30).notNullable();
      completedTasks.boolean("completed").defaultTo(false);
      completedTasks.boolean("moveFromArchive").defaultTo(false);
      completedTasks
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("archived", (archived) => {
      archived.increments("task_id");
      archived.string("name", 30).notNullable();
      archived.boolean("completed").defaultTo(false);
      archived.boolean("moveFromArchive").defaultTo(false);
      archived
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("lists", (lists) => {
      lists.increments("list_id");
      lists.string("name", 30).notNullable();
      lists
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("tags", (tags) => {
      tags.increments("tag_id");
      tags.string("name", 30).notNullable();
      tags
        .integer("list_id")
        .unsigned()
        .notNullable()
        .references("list_id")
        .inTable("lists")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("items", (items) => {
      items.increments("item_id");
      items.string("name", 30).notNullable();
      items.boolean("completed").defaultTo(false);
      items
        .integer("list_id")
        .unsigned()
        .notNullable()
        .references("list_id")
        .inTable("lists")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("notes", (notes) => {
      notes.increments("note_id");
      notes.string("name", 50).notNullable();
      notes.text("description").notNullable();
      notes
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("notes")
    .dropTableIfExists("items")
    .dropTableIfExists("tags")
    .dropTableIfExists("lists")
    .dropTableIfExists("archived")
    .dropTableIfExists("completedTasks")
    .dropTableIfExists("tasks")
    .dropTableIfExists("users");
};
