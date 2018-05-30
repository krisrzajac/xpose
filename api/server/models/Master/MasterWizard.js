const Sequelize = require('sequelize');


// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'masterWizard';

const MasterWizard = sequelize.define('masterWizard', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },

}, {
  tableName: 'masterWizard'
});
MasterWizard.associate = function (models) {

  MasterWizard.hasMany(models.masterMonster, {
    // as: 'wizard_id',
  });

  MasterWizard.hasMany(models.masterRune, {
    //
  });
  MasterWizard.hasMany(models.masterBuilding, {
    //
  });

  MasterWizard.belongsTo(models.instanceWizard, {
    //
  })
}
module.exports = MasterWizard