const Sequelize = require('sequelize');

// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monster_source';

const Monster_source = sequelize.define('monster_source', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  monster_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monster',
      key: 'id'
    },
    unique: true
  },
  monsterSource_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monsterSource',
      key: 'id'
    }
  }
}, {
  tableName: 'monster_source'
});
module.exports = Monster_source