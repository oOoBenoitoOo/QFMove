"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ScopeApplications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      scope_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Scopes",
            schema: "public",
          },
          key: "id",
        },
      },
      application_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Applications",
            schema: "public",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ScopeApplications");
  },
};
