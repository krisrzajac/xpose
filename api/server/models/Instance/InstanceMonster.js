const Sequelize = require('sequelize');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'instanceMonster';

const InstanceMonster = sequelize.define('instanceMonster', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  unit_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  //Redundant, since we are gonna link this to instanceWizard through hasMany
  // wizard_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },

  //COM2US ID : This is 'name' of monster, links to monster table
  unit_master_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //current level
  unit_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //Stars(currently)
  //TODO:Constraints (1-6)
  class: {
    type: Sequelize.INTEGER,
      allowNull: false
  },

  //con value (hp=con*15)
  con: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //atk
  atk: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //def
  def: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //spd
  spd: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //resist
  resist: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //accuracy
  unit_master_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //critical hit rate
  critical_rate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //critical damage
  critical_damage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  //************************************************************************************************************
  //Copying pete's columns for skill level - don't want a join table with this massive fucking table for skills
  //************************************************************************************************************
  //Using array format found in json data,
  //[0][0] is skill 1's skill ID
  //[0][1] is skill 1's level
  //
  skill_0_1: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  skill_1_1: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  skill_2_1: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  skill_3_1: {
    type: Sequelize.INTEGER,
    allowNull: false
  },



  
  //************************************************************************************************************
  //Rune subtotals for the monster in this instance - 
  //************************************************************************************************************
  
  rune_attack: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_crit_damage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_crit_rate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_defense: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_hp: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_resistance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rune_speed: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  //TODO: Think this one through how to store sets- 
  // rune_sets: {
  //   type:Sequelize.ARRAY(Sequelize.INTEGER)
  // }

  //is this monster hom, 0 no 1 yes
  //TODO: change to boolean
  homunculus: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  
  homunculus_name: {
    type: Sequelize.TEXT,
    allowNull: true
  },


  create_time: {
    type: Sequelize.DATE,
    allowNull: true
  },
  //Fun efficiency for mon
  avg_rune_efficiency: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },

  //
  //TODO:
  notes: {
    type: Sequelize.TEXT,
    allowNull: true
  },
}, {
  tableName: 'instanceMonster'
});

InstanceMonster.associate = function (models) {
  InstanceMonster.hasMany(models.instanceRune, {
    // as: "rune_id",
  })
  InstanceMonster.belongsTo(models.instanceWizard, {
    // as: "wizard_id",
  })
  InstanceMonster.belongsTo(models.instanceBattle,
  {
    // as: "battle_id",
  })
}

module.exports = InstanceMonster