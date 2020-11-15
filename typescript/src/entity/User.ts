import bookshelf from "./../bookshelf";
import Group from "./Group";

class User extends bookshelf.Model {
  get tableName() {
    return "user";
  }

  groups() {
    return this.belongsToMany(Group);
  }
}

export default User;
