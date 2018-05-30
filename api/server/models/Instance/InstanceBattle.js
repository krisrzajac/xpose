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
    primaryKey: true
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
  tableName: 'instanceBattle'
});
InstanceBattle.associate = function (models) {

  InstanceBattle.hasMany(models.instanceWizard, {

  })

  InstanceBattle.hasMany(models.instanceBuilding, {

  })


  InstanceBattle.hasMany(models.instanceMonster, {

  })

  InstanceBattle.hasMany(models.instanceRune, {
    
  })

}

module.exports = InstanceBattle