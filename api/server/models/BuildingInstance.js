const Sequelize = require('sequelize');

// for encrypting our passwords
const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'buildingInstance';

const BuildingInstance = sequelize.define('buildingInstance', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  owner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'summoner',
      key: 'id'
    }
  },
  building_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'building',
      key: 'id'
    }
  }
}, {
  tableName: 'buildingInstance'
});
module.exports = BuildingInstance