const Sequelize = require('sequelize');


// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'masterBuilding';

const MasterBuilding = sequelize.define('masterBuilding', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },


}, {
  tableName

  

});
MasterBuilding.associate = function (models) {

  MasterBuilding.belongsTo(models.masterWizard, {
    // as: 'wizard_id',
  });

  MasterBuilding.belongsTo(models.instanceBuilding, {
    //
  })

  MasterBuilding.belongsTo(models.building);
}
module.exports = MasterBuilding