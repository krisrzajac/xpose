const Sequelize = require('sequelize');

// for encrypting our passwords
const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterSource';

const MonsterSource = sequelize.define('monsterSource', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  icon_filename: {
    type: Sequelize.STRING,
    allowNull: true
  },
  farmable_source: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  meta_order: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'monsterSource'
});
module.exports = MonsterSource