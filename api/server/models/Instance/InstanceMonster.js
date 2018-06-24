const Sequelize = require("sequelize");

// the DB connection
const sequelize = require("../../../config/database");

// hooks are functions that can run before or after a specific event
const hooks = {};

// naming the table in DB
const tableName = "instanceMonster";

const InstanceMonster = sequelize.define(
  "instanceMonster",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pos_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    unit_id: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    // Redundant, since we are gonna link this to instanceWizard through hasMany
    wizard_id: {
      type: Sequelize.BIGINT,
      allowNull: false
    },

    //COM2US ID : This is 'name' of monster, links to monster table
    unit_master_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //current level
    unit_level: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //Stars(currently)
    //TODO:Constraints (1-6)
    class: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //con value (hp=con*15)
    con: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //atk
    atk: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //def
    def: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //spd
    spd: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //resist
    resist: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //accuracy
    accuracy: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //critical hit rate
    critical_rate: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //critical damage
    critical_damage: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    //max hp calculated from con
    max_hp: {
      type: Sequelize.INTEGER,
      allowNull: true
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
      allowNull: true
    },
    skill_1_1: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    skill_2_1: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    skill_3_1: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //************************************************************************************************************
    //Rune subtotals for the monster in this instance -
    //************************************************************************************************************
    //sets:       {1:'Energy',2:'Guard',3:'Swift',4:'Blade',5:'Rage',6:'Focus',7:'Endure',8:'Fatal',10:'Despair',11:'Vampire',13:'Violent',14:'Nemesis',15:'Will',16:'Shield',17:'Revenge',18:'Destroy',19:'Fight',20:'Determination',21:'Enhance',22:'Accuracy',23:'Tolerance'},
    //effectTypes:{0:'',1:'HPflat',2:'HP%',3:'ATKflat',4:'ATK%',5:'DEFflat',6:'DEF%',8:'SPD',9:'CRate',10:'CDmg',11:'RES',12:'ACC'},
    rune_hp_flat: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Percent hp from runes (mapped from substat 2)
    rune_hp_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    rune_hp_percent_value: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //Flat atk from runes (mapped from substat 3)
    rune_attack_flat: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Percent atk from runes (mapped from substat 4)
    rune_attack_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    rune_attack_percent_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Flat def from runes (mapped from substat 5)
    rune_defense_flat: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Percent def from runes (mapped from substat 6)
    rune_defense_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    rune_defense_percent_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    //What's substat 7?

    //spd from runes (mapped from substat 8)
    rune_speed: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //CR from runes (mapped from substat 9)
    rune_crit_rate: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //CD from runes (mapped from substat 10)
    rune_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Res from runes (mapped from substat 11)
    rune_resistance: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Acc from runes (mapped from substat 12)
    rune_accuracy: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //************************************************************************************************************
    //Rune sets
    //************************************************************************************************************

    //Array counting sets on monster -
    //sets:       {1:'Energy',2:'Guard',3:'Swift',4:'Blade',5:'Rage',6:'Focus',7:'Endure',8:'Fatal',10:'Despair',11:'Vampire',13:'Violent',14:'Nemesis',15:'Will',16:'Shield',17:'Revenge',18:'Destroy',19:'Fight',20:'Determination',21:'Enhance',22:'Accuracy',23:'Tolerance'},
    //effectTypes:{0:'',1:'HPflat',2:'HP%',3:'ATKflat',4:'ATK%',5:'DEFflat',6:'DEF%',8:'SPD',9:'CRate',10:'CDmg',11:'RES',12:'ACC'},
    set_count: {
      type: Sequelize.ARRAY(Sequelize.SMALLINT),
      allowNull: true,
      
    },
    set_complete: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
      defaultValue: null
    },

    //************************************************************************************************************
    //Rune sets substat bonus'
    //************************************************************************************************************
    //sets:       {1:'Energy',2:'Guard',3:'Swift',4:'Blade',5:'Rage',6:'Focus',7:'Endure',8:'Fatal',10:'Despair',11:'Vampire',13:'Violent',14:'Nemesis',15:'Will',16:'Shield',17:'Revenge',18:'Destroy',19:'Fight',20:'Determination',21:'Enhance',22:'Accuracy',23:'Tolerance'},
    //effectTypes:{0:'',1:'HPflat',2:'HP%',3:'ATKflat',4:'ATK%',5:'DEFflat',6:'DEF%',8:'SPD',9:'CRate',10:'CDmg',11:'RES',12:'ACC'},
    //Percent hp from sets (mapped from substat 2)
    set_hp_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    set_hp_percent_value: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //Percent atk from sets (mapped from substat 4)
    set_attack_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    set_attack_percent_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Percent def from sets (mapped from substat 6)
    set_defense_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    set_defense_percent_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //What's substat 7?

    //spd from sets (mapped from substat 8)
    set_speed_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    set_speed_percent_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //CR from sets (mapped from substat 9)
    set_crit_rate: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //CD from sets (mapped from substat 10)
    set_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Res from sets (mapped from substat 11)
    set_resistance: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //Acc from sets (mapped from substat 12)
    set_accuracy: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    //************************************************************************************************************
    // Local totals (What's shown in game)
    //************************************************************************************************************

    //+HP from in game
    bonus_hp: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //+ATK from in game
    bonus_attack: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+DEF from in game
    bonus_defense: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+SPD from in game
    bonus_speed: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+CR from in game
    bonus_crit_rate: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+CD from in game
    bonus_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+RES from in game
    bonus_resistance: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ACC from in game
    bonus_accuracy: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //local total from in game
    local_total_hp: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //local total from in game
    local_total_attack: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //local total from in game
    local_total_defense: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //local total from in game
    local_total_speed: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //local total from in game
    local_total_crit_rate: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //local total from in game
    local_total_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //local total from in game
    local_total_resistance: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //local total from in game
    local_total_accuracy: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //************************************************************************************************************
    // Tower stats
    //************************************************************************************************************

    //+HP from tower
    tower_hp: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ATK from tower basic tower
    tower_attack_basic: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ATK from tower colored tower
    tower_attack_colored: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+DEF from tower
    tower_defense: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+SPD from tower
    tower_speed: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+CD from tower
    tower_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //************************************************************************************************************
    // Flag stats
    //************************************************************************************************************

    //+HP from flag
    flag_hp: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ATK from flag
    flag_attack: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+DEF from flag
    flag_defense: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+CD from flag
    flag_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //************************************************************************************************************
    // Leader stats
    //************************************************************************************************************

    //+HP from leader
    leader_hp_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    leader_hp_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ATK from leader
    leader_attack_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    leader_attack_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+DEF from leader
    leader_defense_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    leader_defense_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+SPD from leader
    leader_speed_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    leader_speed_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+CR from leader
    leader_crit_rate: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+CD from leader
    leader_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+RES from leader
    leader_resistance: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ACC from leader
    leader_accuracy: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //************************************************************************************************************
    // Group stats (fight, tolerance, acc, maybe passives?)
    //************************************************************************************************************

    //+HP from group
    group_hp_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    group_hp_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ATK from group
    group_attack_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    group_attack_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+DEF from group
    group_defense_percent: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    group_defense_value: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+RES from group
    group_resistance: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+ACC from group
    group_accuracy: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //+Shield hp from shield sets
    group_shield_hp: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    //************************************************************************************************************
    // Local eff hp (what's shown in optimizer)
    //************************************************************************************************************
    eff_hp: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    eff_hp_broken: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //************************************************************************************************************
    // Final totals
    //************************************************************************************************************

    //final total not seen in game (the juice)
    final_total_hp: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_hp_shielded: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_attack: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_defense: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_speed: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_crit_rate: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_crit_damage: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_resistance: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //final total not seen in game (the juice)
    final_total_accuracy: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },

    //************************************************************************************************************
    // eff hp final
    //************************************************************************************************************
    final_eff_hp: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    final_eff_hp_broken: {
      type: Sequelize.INTEGER,
      allowNull: true
    },

    //TODO: Abstract these totals away form instance Monster, majority will be null
    //      New model? InstanceMonsterTotals?
    //************************************************************************************************************
    // Misc
    //************************************************************************************************************

    //is this monster hom, 0 no 1 yes
    //TODO: change to boolean
    homunculus: {
      type: Sequelize.INTEGER,
      allowNull: true
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
    }
  },
  {
    freezeTableName: true,
    tableName
  }
);

InstanceMonster.associate = function(models) {
  InstanceMonster.hasMany(models.instanceRune, {
    // as: "rune_id",
  });
  InstanceMonster.belongsTo(models.instanceWizard, {
    // as: "instanceWizardId"
  });
  InstanceMonster.belongsTo(models.instanceBattle, {
    // as: "battle_id",
    // as: "instanceBattleId"
  });
  InstanceMonster.belongsTo(models.monster, {
    foreignKey: "unit_master_id",
    targetKey: "com2us_id"
  });
};

module.exports = InstanceMonster;
