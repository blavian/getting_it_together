"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [];
    const demoUser = {
      email: "demo@user.io",
      username: "Demo",
      hashedPassword: bcrypt.hashSync("password", 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(demoUser);
    for (let i = 0; i < 100; i++) {
      const newUsers = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync("test", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      users.push(newUsers);
    }
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
