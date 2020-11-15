exports.up = function (knex) {
  return knex.schema
    .createTable("group", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
    })
    .createTable("group_user", function (table) {
      table.integer("group_id").unsigned().references("group.id");
      table.integer("user_id").unsigned().references("user.id");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("group_user").dropTable("group");
};
