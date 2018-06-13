const Sequelize = require('sequelize');

// for encrypting our passwords
// const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monsterSkillEffect';

const MonsterSkillEffect = sequelize.define('monsterSkillEffect', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  is_buff: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  icon_filename: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  tableName,



});

MonsterSkillEffect.associate = function (models) {
  MonsterSkillEffect.belongsToMany(models.monsterSkill, {
    through: 'MonsterSkill_SkillEffect',
  });
};

module.exports = MonsterSkillEffect;
