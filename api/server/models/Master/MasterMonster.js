const Sequelize = require('sequelize');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'masterMonster';

const MasterMonster = sequelize.define('masterMonster', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  

}, {
  tableName: 'masterMonster'
});

MasterMonster.associate = function (models) {
  MasterMonster.hasMany(models.masterRune, {
    // as: "rune_id",
  })
  MasterMonster.belongsTo(models.masterWizard, {
    // as: "wizard_id",
  })
  MasterMonster.belongsTo(models.instanceMonster, {
    //
  })
}

module.exports = MasterMonster