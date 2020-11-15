const bookshelf = require("./bookshelf");

const User = bookshelf.model("User", {
  tableName: "user",
  groups() {
    return this.belongsToMany("Group");
  },
});

module.exports = User;
