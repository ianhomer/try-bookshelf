const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "postgres",
    charset: "utf8",
  },
  debug: true,
});
module.exports = require("bookshelf")(knex);
