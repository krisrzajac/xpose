const Sequelize = require('sequelize');

// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monster_skills';

const Monster_skills = sequelize.define('monster_skills', {
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
  monsterSkill_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monsterSkill',
      key: 'id'
    }
  }
}, {
  tableName: 'monster_skills'
});

module.exports = Monster_skills