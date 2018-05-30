const Sequelize = require('sequelize');

// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'homunculusSkill_monsters';

const HomunculusSkill_monsters = sequelize.define('homunculusSkill_monsters', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  homunculusSkill_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'homunculusSkill',
      key: 'id'
    },
    unique: true
  },
  monster_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'monster',
      key: 'id'
    }
  }
}, {
  tableName: 'homunculusSkill_monsters'
});
module.exports = HomunculusSkill_monsters