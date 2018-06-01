const Sequelize = require('sequelize');

// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'building';

const Building = sequelize.define('building', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  com2us_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  max_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  area: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  affected_stat: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  element: {
    type: Sequelize.STRING,
    allowNull: true
  },
  stat_bonus: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
    defaultValue: []
  },
  upgrade_cost: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
    defaultValue: []
  },
  icon_filename: {
    type: Sequelize.STRING,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  tableName

  

});



module.exports = Building