var knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "admin",
    password: "password",
    database: "admin",
    charset: "utf8",
  },
  searchPath: ["knex", "public"],
});

export default require("bookshelf")(knex);
