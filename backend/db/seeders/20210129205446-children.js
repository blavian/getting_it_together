"use strict";
const faker = require("faker");
const { User } = require("../models");

module.exports = {
  up: async (queryInterface) => {

    const children = [];

    for (let i = 0; i < 100; i++) {
      const newChild = {
        userId: faker.random.number({ min: 1, max: 101 }),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        age: faker.random.number({ min: 5, max: 14 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      children.push(newChild);
    }
    return queryInterface.bulkInsert("Children", children, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Children", null, {});
  },
};
