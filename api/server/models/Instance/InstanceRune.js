const Sequelize = require("sequelize");

// the DB connection
const sequelize = require("../../../config/database");

// hooks are functions that can run before or after a specific event
const hooks = {};

// naming the table in DB
const tableName = "instanceRune";

const InstanceRune = sequelize.define(
  "instanceRune",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rune_id: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    wizard_id: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    occupied_type: {
      // redundant? this ends up same value as 'unit_id' linked through association
      type: Sequelize.INTEGER,
      allowNull: false
    },
    occupied_id: {
      // Change to boolean? 1 is on monster, 2 is in inventory or something. 0 never comes up?
      type: Sequelize.BIGINT,
      allowNull: false
    },
    slot_no: {
      // TODO:ADD VALIDATION / CONSTRAINTS for 1-6 only on slot
      type: Sequelize.INTEGER,
      allowNull: false
    },
    rank: {
      // rank is quality - 1 white 2 green 3 blue 4 purple 5 leg
      // TODO:add validation / constraints for 1-5
      type: Sequelize.INTEGER,
      allowNull: false
    },
    class: {
      // stars
      // TODO:add validation / constraints for 1-6
      type: Sequelize.INTEGER,
      allowNull: false
    },
    set_id: {
      // set type - sets:{1:'Energy',2:'Guard',3:'Swift',4:'Blade',5:'Rage',6:'Focus',7:'Endure',8:'Fatal',10:'Despair',11:'Vampire',13:'Violent',14:'Nemesis',15:'Will',16:'Shield',17:'Revenge',18:'Destroy',19:'Fight',20:'Determination',21:'Enhance',22:'Accuracy',23:'Tolerance'},
      // Todo: enum and constraints
      type: Sequelize.INTEGER,
      allowNull: false
    },
    upgrade_limit: {
      // Probably not necessary, can rune be higher then 15? NO
      type: Sequelize.INTEGER,
      allowNull: false
    },
    upgrade_curr: {
      // current level of rune 1-15
      // TODO: Add constraint
      type: Sequelize.INTEGER,
      allowNull: false
    },
    base_value: {
      // Not needed?
      type: Sequelize.INTEGER,
      allowNull: false
    },
    sell_value: {
      // Not needed?
      type: Sequelize.INTEGER,
      allowNull: false
    },
    // Copying Pete's format for storing rune substats into individual columns - renamed column to match exporter data
    // TODO: Store as Arrays?
    pri_eff_0: {
      // main stat TYPE
      // TODO: Add constraint
      type: Sequelize.INTEGER,
      allowNull: false
    },
    pri_eff_1: {
      // main stat VALUE
      // TODO: Add constraint
      type: Sequelize.INTEGER,
      allowNull: false
    },
    prefix_eff_0: {
      // innate stat TYPE
      // TODO: Add constraint
      type: Sequelize.INTEGER,
      allowNull: true
    },
    prefix_eff_1: {
      // innate stat VALUE
      // TODO: Add constraint
      type: Sequelize.INTEGER,
      allowNull: true
    },
    //* ******************************************************************************
    // first sub
    //* ******************************************************************************
    sec_eff_0_0: {
      // sec_eff[0][0] first sub type
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_0_1: {
      // sec_eff[0][1] first sub value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_0_2: {
      // sec_eff[0][2] first sub enchanted? 0 no 1 true
      // TODO: Add constraint, change to boolean
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_0_3: {
      // sec_eff[0][3] first sub grind value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    //* ******************************************************************************
    // second sub
    //* ******************************************************************************
    sec_eff_1_0: {
      // sec_eff[1][0] second sub type
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_1_1: {
      // sec_eff[1][1] second sub value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_1_2: {
      // sec_eff[1][2] second sub enchanted? 0 no 1 true
      // TODO: Add constraint, change to boolean
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_1_3: {
      // sec_eff[1][3] second sub grind value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },

    //* ******************************************************************************
    // third sub
    //* ******************************************************************************
    sec_eff_2_0: {
      // sec_eff[2][0] third sub type
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_2_1: {
      // sec_eff[2][1] third sub value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_2_2: {
      // sec_eff[2][2] third sub enchanted? 0 no 1 true
      // TODO: Add constraint, change to boolean
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_2_3: {
      // sec_eff[2][3] third sub grind value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },

    //* ******************************************************************************
    // fourth sub
    //* ******************************************************************************
    sec_eff_3_0: {
      // sec_eff[3][0] fourth sub type
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_3_1: {
      // sec_eff[3][1] fourth sub value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_3_2: {
      // sec_eff[3][2] fourth sub enchanted? 0 no 1 true
      // TODO: Add constraint, change to boolean
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    sec_eff_3_3: {
      // sec_eff[3][3] fourth sub grind value
      // TODO: Add constraint
      type: Sequelize.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },

    //* ******************************************************************************
    // original associations by using reference id, using Model.associate= function() instead
    //* ******************************************************************************
    // owner_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'summoner',
    //     key: 'id'
    //   }
    // },
    // assigned_to_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'monsterInstance',
    //     key: 'id'
    //   }
    // },

    // cool bonus columns for quicker sorting ? Pete's original model - assign these booleans when adding rows to table
    // Since allowNull: false   we HAVE to assign, maybe comment / allowNull true instead
    has_accuracy: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    has_atk: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    has_crit_dmg: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    has_crit_rate: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    has_def: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    has_hp: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    has_resist: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    has_speed: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },

    // Might as well store efficiency in here for fast lookup - fun to see "MOST EFFICIENT RUNE"
    efficiency: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    max_efficiency: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    substat_upgrades_remaining: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    original_quality: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    // NOTES!?!?!*************************************************************
    notes: {
      type: Sequelize.TEXT,
      allowNull: true
    },

    // RAW Arrays from data? Might as well keep em around, remove when we dont need em
    substat_crafts: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true
    },
    substat_values: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true
    },
    substats: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    tableName
  }
);

InstanceRune.associate = function(models) {
  InstanceRune.belongsTo(models.instanceMonster, {
    // as: 'unit_id',
    // as: "instanceMonsterId",
  });

  InstanceRune.belongsTo(models.instanceWizard, {
    // as: 'wizard_id',
    // as: "instanceWizardId",
  });

  InstanceRune.belongsTo(models.instanceBattle, {
    // as: 'battle_id'
    // as: "instanceBattleId",
  });
};

module.exports = InstanceRune;
