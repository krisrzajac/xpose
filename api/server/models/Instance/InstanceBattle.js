const Sequelize = require('sequelize');


// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'instanceBattle';

const InstanceBattle = sequelize.define('instanceBattle', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  command: {
    type: Sequelize.STRING,
    allowNull: false
  },

  battle_key: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  ts_val: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  tvalue: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  freezeTableName: true,
  tableName,


  

});
InstanceBattle.associate = function (models) {

  InstanceBattle.hasMany(models.instanceWizard, {
    // as:"instanceWizardId",
  })

  InstanceBattle.hasMany(models.instanceBuilding, {
    // as:"instanceBuildingId",
  })


  InstanceBattle.hasMany(models.instanceMonster, {
    // as:"instanceMonsterId"
  })

  InstanceBattle.hasMany(models.instanceRune, {
    // as:"instanceRuneId"
  })

}

module.exports = InstanceBattle