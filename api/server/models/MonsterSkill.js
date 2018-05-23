const Sequelize = require('sequelize');

// for encrypting our passwords
const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterSkill';

const MonsterSkill = sequelize.define('monsterSkill', {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  max_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  level_progress_description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  icon_filename: {
    type: Sequelize.STRING,
    allowNull: true
  },
  slot: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  passive: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  cooltime: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  com2us_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  hits: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  aoe: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  multiplier_formula: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  multiplier_formula_raw: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true,
    defaultValue: []
  }
}, {
  tableName: 'monsterSkill'
});

MonsterSkill.associate = function (models) {
  MonsterSkill.belongsToMany(models.monster, {
    through: "Monster_Skills"
  });
  MonsterSkill.belongsToMany(models.monsterSkillScalingStat, {
    through: "MonsterSkill_ScalingStats"
  });
  MonsterSkill.belongsToMany(models.monsterSkillEffect, {
    through: "MonsterSkill_SkillEffect"
  })
}
module.exports = MonsterSkill