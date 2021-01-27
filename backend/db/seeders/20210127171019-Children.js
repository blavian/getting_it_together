'use strict';
const faker = require('faker')
const{User} = require('../models')

module.exports = {
  up: async (queryInterface) => {
    function randomNum(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const users = await User.count()

    const children = []

    for(let i = 0; i < 100; i++){
      const newChild = {
        userId: randomNum(users),
        first_name:faker.name.firstName,
        last_name:faker.name.lastName,
        age: faker.random.number({min:5,max:14}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      children.push(newChild)
    }
    return queryInterface.bulkInsert('Children', children,{})
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Children', null, {});
  }
};


   