const Sequelize = require('sequelize');

// for encrypting our passwords
// const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'homunculusSkill';

const HomunculusSkill = sequelize.define('homunculusSkill', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  mana_cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // skill: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'monsterSkill',
  //     key: 'id',
  //   },
  // },
}, {
  tableName,
});

HomunculusSkill.associate = function (models) {
  HomunculusSkill.belongsToMany(models.monster, {
    through: "HomunculusSkill_Monsters"
  })
  HomunculusSkill.belongsTo(models.monsterSkill, {
    as: "skill"
  })
}

HomunculusSkill.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};
module.exports = HomunculusSkill;