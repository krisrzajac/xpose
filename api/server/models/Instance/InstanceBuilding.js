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
    primaryKey: true,
    autoIncrement: true
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
    type: Sequelize.BIGINT,
    allowNull: false
  },
}, {
  freezeTableName: true,
  tableName,


  

});
InstanceBuilding.associate = function (models) {

  InstanceBuilding.belongsTo(models.instanceWizard, {
    // as: "instanceWizardId",
  });

  InstanceBuilding.belongsTo(models.instanceBattle, {
    //
    // as: "instanceBattleId",
  });

  InstanceBuilding.belongsTo(models.building, {
    foreignKey: "master_id",
    targetKey: "com2us_id",


  });
}
module.exports = InstanceBuilding