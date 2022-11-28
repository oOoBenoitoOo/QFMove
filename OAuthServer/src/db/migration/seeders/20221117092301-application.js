"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Applications", [
      {
        client_id: "1caf1678-665a-11ed-9022-0242ac120002",
        redirect_uri: "http://localhost:9003/callback",
        client_secret: "lMnJ2xDRWFT15e0bs9d8",
        name: "QFmove",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
