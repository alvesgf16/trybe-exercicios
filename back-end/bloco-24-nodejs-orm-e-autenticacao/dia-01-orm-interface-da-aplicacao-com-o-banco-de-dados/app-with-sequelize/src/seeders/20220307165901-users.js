'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     queryInterface.bulkInsert('Users',
     [
       {
         full_name: 'Leonardo',
         email: 'leo@test.com',
         // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
         created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
         updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
       },
       {
         full_name: 'JEduardo',
         email: 'edu@test.com',
         created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
         updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
       },
     ], {});
  },

  async down (queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     queryInterface.bulkDelete('Users', null, {});
  }
};
