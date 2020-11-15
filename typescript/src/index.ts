console.log("Trying Bookshelf with Typescript");

import User from "./entity/User";
import Group from "./entity/Group";

const seed = Math.floor(new Date().getTime() / 1000);

const name = "my-name=" + seed;

const showData = (name) => {
  new User()
    .fetchAll()
    .then((results) => {
      results.forEach((user) => {
        console.log(`User : ${user.name} : ${JSON.stringify(user)}`);
      });
    })
    .catch((err) => console.log(err));

  console.log(`Getting user ${name}`);
  User.forge({ name: name })
    .fetch()
    .then((newUser) => {
      console.log(`New user ${name}: ${JSON.stringify(newUser)}`);
      console.log(`Groups : ${JSON.stringify(newUser.groups())}`);
    })
    .catch((err) => console.log(err));
};

User.forge({ name: name })
  .save()
  .then((user) => {
    Group.forge({ name: "my-group-" + seed })
      .save()
      .then((group) => {
        console.log(`Saved group : ${JSON.stringify(user)}`);
        try {
          console.log(`Attaching group`);
          user
            .groups()
            .attach(group)
            .then((collection) => `Saved relation ${collection}`)
            .catch((err) => console.log(err));
          console.log(`Attached group`);
          showData(name);
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => console.log(err));
    console.log("saved user");
  })
  .catch((err) => console.log(err));
