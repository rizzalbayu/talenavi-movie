'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      title: {
        field: 'title',
        type: Sequelize.STRING,
        allowNull: false,
      },
      director: {
        field: 'director',
        type: Sequelize.STRING,
        allowNull: false,
      },
      summary: {
        field: 'summary',
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      genre: {
        field: 'genre',
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
        allowNull: true,
        type: Sequelize.DATE,
      },
      createdBy: {
        field: 'created_by',
        allowNull: true,
        type: Sequelize.STRING,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedBy: {
        field: 'updated_by',
        allowNull: true,
        type: Sequelize.STRING,
      },
      deletedAt: {
        field: 'deleted_at',
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  },
};
