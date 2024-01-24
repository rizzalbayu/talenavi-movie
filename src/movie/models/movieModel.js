const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database');

const attributes = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  title: {
    field: 'title',
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    field: 'director',
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: {
    field: 'summary',
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  genre: {
    field: 'genre',
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    field: 'created_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
  createdBy: {
    field: 'created_by',
    allowNull: true,
    type: DataTypes.STRING,
  },
  updatedAt: {
    field: 'updated_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
  updatedBy: {
    field: 'updated_by',
    allowNull: true,
    type: DataTypes.STRING,
  },
  deletedAt: {
    field: 'deleted_at',
    allowNull: true,
    type: DataTypes.DATE,
  },
};

const MovieModel = sequelize.define('movies', attributes, {
  freezeTableName: true,
  underscored: true,
  paranoid: true,
});

module.exports = {
  MovieModel,
};
