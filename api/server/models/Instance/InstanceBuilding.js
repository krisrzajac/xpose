const Sequelize = require('sequelize');


// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'instanceBuilding';

const InstanceBuilding = sequelize.define('instanceBuilding', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },

  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  // building_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'building',
  //     key: 'id'
  //   }
  // }
  deco_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  tableName: 'instanceBuilding'
});
InstanceBuilding.associate = function (models) {

  InstanceBuilding.belongsTo(models.instanceWizard, {
    // as: 'wizard_id',
  });

  InstanceBuilding.belongsTo(models.instanceBattle, {
    //
  });

  InstanceBuilding.belongsTo(models.building, {
    as: 'master_id',
 

  });
}
module.exports = InstanceBuilding