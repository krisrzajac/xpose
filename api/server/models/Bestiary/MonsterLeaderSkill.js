const Sequelize = require('sequelize');

// for encrypting our passwords
// const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterLeaderSkill';

const MonsterLeaderSkill = sequelize.define('monsterLeaderSkill', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  attribute: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  element: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  area: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  tableName,



});
module.exports = MonsterLeaderSkill;
