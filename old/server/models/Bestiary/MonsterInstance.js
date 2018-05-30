const Sequelize = require('sequelize');

// for encrypting our passwords
const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterInstance';

const MonsterInstance = sequelize.define('monsterInstance', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  skill_1_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  skill_2_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  skill_3_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  skill_4_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fodder: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  in_storage: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  priority: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  monster_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monster',
      key: 'id'
    }
  },
  owner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'summoner',
      key: 'id'
    }
  },
  ignore_for_fusion: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  base_accuracy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  base_attack: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  base_crit_damage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  base_crit_rate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  base_defense: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  base_hp: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  base_resistance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  base_speed: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_accuracy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_attack: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_crit_damage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_crit_rate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_defense: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_hp: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_resistance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_speed: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  com2us_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  created: {
    type: Sequelize.DATE,
    allowNull: true
  },
  avg_rune_efficiency: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  custom_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'monsterInstance'
});
module.exports = MonsterInstance