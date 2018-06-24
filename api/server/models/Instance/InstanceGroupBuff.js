const Sequelize = require('sequelize');


// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};
//TODO: Flesh this model out, maybe also instanceBattleTotal for monster?
// naming the table in DB
const tableName = 'instanceGroupBuff';

const InstanceGroupBuff = sequelize.define('instanceGroupBuff', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
}, {
  freezeTableName: true,
  tableName,
});
InstanceGroupBuff.associate = function (models) {

  

  InstanceGroupBuff.belongsTo(models.instanceBattle, {
    //
    // as: "instanceBattleId",
  })

  InstanceGroupBuff.belongsTo(models.instanceWizard, {
    //
    // as: "instanceBattleId",
  })
}
module.exports = InstanceGroupBuff