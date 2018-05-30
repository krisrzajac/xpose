const Sequelize = require('sequelize');
// for encrypting our passwords
//const bcryptSevice = require('../services/bcrypt.service');

// the DB connection
const sequelize = require('../../../config/database');

// hooks are functions that can run before or after a specific event
const hooks = {

};

// naming the table in DB
const tableName = 'monster';



const Monster = sequelize.define('monster', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image_filename: {
    type: Sequelize.STRING,
    allowNull: true
  },
  element: {
    type: Sequelize.STRING,
    allowNull: false
  },
  archetype: {
    type: Sequelize.STRING,
    allowNull: false
  },
  base_stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  can_awaken: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  is_awakened: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  awaken_mats_magic_low: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_magic_mid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_magic_high: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fusion_food: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  awakens_from_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'monster',
      key: 'id'
    }
  },
  awakens_to_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'monster',
      key: 'id'
    }
  },
  base_hp: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  accuracy: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  base_attack: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  crit_damage: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  crit_rate: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  base_defense: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  resistance: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  speed: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  // leader_skill_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: 'monsterLeaderSkill',
  //     key: 'id'
  //   }
  // },
  awaken_bonus: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  obtainable: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  summonerswar_co_url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  wikia_url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  bestiary_slug: {
    type: Sequelize.STRING,
    allowNull: true
  },
  max_lvl_attack: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  max_lvl_defense: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  max_lvl_hp: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  awaken_mats_dark_high: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_dark_low: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_dark_mid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_fire_high: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_fire_low: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_fire_mid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_light_high: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_light_low: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_light_mid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_water_high: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_water_low: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_water_mid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_wind_high: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_wind_low: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  awaken_mats_wind_mid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  farmable: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  skill_ups_to_max: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  com2us_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  family_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  craft_cost: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  homunculus: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  summonerswarmonsters_url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  raw_attack: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  raw_defense: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  raw_hp: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  transforms_into_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'monster',
      key: 'id'
    }
  }
}, {
  tableName: 'monster'
});
Monster.associate = function (models) {
  Monster.belongsToMany(models.monsterSkill, {
    through: "Monster_Skills"
  });
  Monster.belongsToMany(models.homunculusSkill, {
    through: "HomunculusSkill_Monsters"
  });
  Monster.belongsTo(models.monsterLeaderSkill, {
  })

}
module.exports = Monster