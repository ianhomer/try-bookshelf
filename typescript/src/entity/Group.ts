import bookshelf from "./../bookshelf";
import User from "./User";

class Group extends bookshelf.Model {
    get tableName() {
        return 'group';
    }

    users() {
        return this.belongsToMany('User');
    }
}

export default Group