"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface) => {
    function randomChore(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
let chores = [
      "wash dishes",
      "pick up your toys",
      "do laundry",
      "take out the trash",
      "clean your room",
      ""
    ];
    
    let newChore = [];

    for (let i = 0; i < 100; i++) {
      let ChoreTable = {
        description: randomChore(chores),
        frequency: "once a week",
        childId:faker.random.number({ min: 1, max: 100 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      newChore.push(ChoreTable);
    }
    return queryInterface.bulkInsert("Chores", newChore, {});
  },

  down: (queryInterface, ) => {
    return queryInterface.bulkDelete("Chores", null, {});
  },
};
