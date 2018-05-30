const Sequelize = require('sequelize');

// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterSkill_scalingStats';

const MonsterSkill_scalingStats = sequelize.define('monsterSkill_scalingStats', {
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
  monsterSkillScalingStat_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monsterSkillScalingStat',
      key: 'id'
    }
  }
}, {
  tableName: 'monsterSkill_scalingStats'
});
module.exports = MonsterSkill_scalingStats