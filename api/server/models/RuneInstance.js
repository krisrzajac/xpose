const Sequelize = require('sequelize');

// for encrypting our passwords
const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'runeInstance';

const RuneInstance = sequelize.define('runeInstance', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  slot: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  main_stat: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  main_stat_value: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  innate_stat: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  innate_stat_value: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_1: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_1_value: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_2: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_2_value: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_3: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_3_value: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_4: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_4_value: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  owner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'summoner',
      key: 'id'
    }
  },
  assigned_to_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'monsterInstance',
      key: 'id'
    }
  },
  has_accuracy: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  has_atk: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  has_crit_dmg: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  has_crit_rate: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  has_def: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  has_hp: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  has_resist: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  has_speed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  quality: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  com2us_id: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  marked_for_sale: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  value: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  efficiency: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  substat_1_craft: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_2_craft: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_3_craft: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_4_craft: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  max_efficiency: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  substat_upgrades_remaining: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  substat_crafts: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: true
  },
  substat_values: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: true
  },
  substats: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: true
  },
  original_quality: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'runeInstance'
});
module.exports = RuneInstance