const Sequelize = require('sequelize');

// for encrypting our passwords
// const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterSkillEffectDetail';

const MonsterSkillEffectDetail = sequelize.define('monsterSkillEffectDetail', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  aoe: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  single_target: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  self_effect: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  all: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  // effect: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'monsterSkillEffect',
  //     key: 'id'
  //   }
  // },
  // skill: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'monsterSkill',
  //     key: 'id'
  //   }
  // },
  random: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  chance: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  on_crit: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  on_death: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  note: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  self_hp: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  target_hp: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  damage: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  tableName,



});


MonsterSkillEffectDetail.associate = function (models) {
  MonsterSkillEffectDetail.belongsTo(models.monsterSkill, {
    as: 'skill',
  });
  MonsterSkillEffectDetail.belongsTo(models.monsterSkillEffect, {
    as: 'effect',
  });
};

module.exports = MonsterSkillEffectDetail;
