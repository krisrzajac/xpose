const Sequelize = require('sequelize');


// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'masterRune';

const MasterRune = sequelize.define('masterRune', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
}, {
  tableName

  
,
});

MasterRune.associate = function (models) {
  MasterRune.belongsTo(models.masterMonster, {
    // as: 'unit_id',
  });

  MasterRune.belongsTo(models.masterWizard, {
    // as: 'wizard_id',
  });

  MasterRune.belongsTo(models.instanceRune, {})
};


module.exports = MasterRune;