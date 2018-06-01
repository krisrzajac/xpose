const Sequelize = require('sequelize');

// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterSkillScalingStat';

const MonsterSkillScalingStat = sequelize.define('monsterSkillScalingStat', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  stat: {
    type: Sequelize.STRING,
    allowNull: false
  },
  com2us_desc: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  tableName

  

});

MonsterSkillScalingStat.associate = function (models) {
  MonsterSkillScalingStat.belongsToMany(models.monsterSkill, {
    through: "MonsterSkill_ScalingStats"
  })

};

module.exports = MonsterSkillScalingStat