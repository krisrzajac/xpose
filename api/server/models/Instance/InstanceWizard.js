const Sequelize = require('sequelize');


// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'instanceWizard';

const InstanceWizard = sequelize.define('instanceWizard', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },

  wizard_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  wizard_name: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  wizard_level: {
    type: Sequelize.INTEGER,
    allowNull: true
  },


}, {
  tableName: 'instanceWizard'
});
InstanceWizard.associate = function (models) {

  InstanceWizard.hasMany(models.instanceMonster, {
    // as: 'wizard_id',
  });

  InstanceWizard.hasMany(models.instanceRune, {
    //
  });
  InstanceWizard.hasMany(models.instanceBuilding, {
    //
  });

  InstanceWizard.belongsTo(models.instanceBattle, {
    //
  })
}
module.exports = InstanceWizard