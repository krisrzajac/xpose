const Sequelize = require('sequelize');

// for encrypting our passwords
const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterInstance_tags';

const MonsterInstance_tags = sequelize.define('monsterInstance_tags', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  monsterInstance_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monsterInstance',
      key: 'id'
    },
    unique: true
  },
  monsterTag_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monsterTag',
      key: 'id'
    }
  }
}, {
  tableName: 'monsterInstance_tags'
});
module.exports = MonsterInstance_tags