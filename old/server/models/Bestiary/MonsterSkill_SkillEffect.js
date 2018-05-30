const Sequelize = require('sequelize');

// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterSkill_skillEffect';

const MonsterSkill_skillEffect = sequelize.define('monsterSkill_skillEffect', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  monsterSkill_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monsterSkill',
      key: 'id'
    },
    unique: true
  },
  monsterSkillEffect_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monsterSkillEffect',
      key: 'id'
    }
  }
}, {
  tableName: 'monsterSkill_skillEffect'
});
module.exports = MonsterSkill_skillEffect