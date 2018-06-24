const mapping = require("../mapping");
const bestiary = require("../local-bestiary");
const modelService = () => {
  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************
  //  Ancillary methods
  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************

  extendUnitsData = async (monster_list, deco_list, battle_command) => {
    let group_sets = {
      shield: 0,
      shieldHP: 0,
      fight: 0,
      determination: 0,
      enhance: 0,
      accuracy: 0,
      tolerance: 0
    };
    let leader_used = {};

    for (let monster of monster_list) {
      let substats_towers = new Array(13).fill(0);
      let substats_total = new Array(13).fill(0);
      let set_count = new Array(24).fill(0);
      let substats_sets = new Array(13).fill(0);

      let complete_sets = [];

      let pos_id = monster.pos_id;
      if (monster.unit_master_id) {
        if (monster.pos_id === 1) {
          leader_used = bestiary.monster[monster.unit_master_id].leader_skill;
        }

        monster.max_hp = getHPGameBase(monster);

        substats_total = substats_total.fill(0, 0, 13);
        set_count = set_count.fill(0, 0, 23);
        substats_towers = substats_towers.fill(0, 0, 13);

        for (let rune of monster.runes) {
          //main stat
          substats_total[rune.pri_eff_0] += rune.pri_eff_1;
          //small stat
          if (rune.prefix_eff_0 != 0) {
            substats_total[rune.prefix_eff_0] += rune.prefix_eff_1;
          }

          // for (let substat of rune.sec_eff) {
          //   //grindstone
          //   if (substat[3] != 0) {
          //     substats_total[substat[0]] += substat[3];
          //   }
          //   //enchanted
          //   if (substat[2] == 1) {
          //     //message += " (swapped)";
          //   }

          //   substats_total[substat[0]] += substat[1];
          // }

          for (let i = 0; i < 4; i++) {
            substats_total[rune[`sec_eff_${i}_${0}`]] +=
              rune[`sec_eff_${i}_${1}`] + rune[`sec_eff_${i}_${3}`];
          }

          //increment set counter
          set_count[rune.set_id] += 1;
        }

        //Energy
        if (Math.floor(set_count[1] / 2) > 0) {
          for (i = 0; i < Math.floor(set_count[1] / 2); i++)
            complete_sets.push("Energy");
        }

        //Guard
        if (Math.floor(set_count[2] / 2) > 0) {
          for (let i = 0; i < Math.floor(set_count[2] / 2); i++)
            complete_sets.push("Guard");
        }

        //Swift
        if (Math.floor(set_count[3] / 4) > 0) {
          complete_sets.push("Swift");
        }

        //Blade
        if (Math.floor(set_count[4] / 2) > 0) {
          for (i = 0; i < Math.floor(set_count[4] / 2); i++)
            complete_sets.push("Blade");
        }

        //Rage
        if (Math.floor(set_count[5] / 4) > 0) {
          complete_sets.push("Rage");
        }

        //Focus
        if (Math.floor(set_count[6] / 2) > 0) {
          for (i = 0; i < Math.floor(set_count[6] / 2); i++)
            complete_sets.push("Focus");
        }

        //Endure
        if (Math.floor(set_count[7] / 2) > 0) {
          for (i = 0; i < Math.floor(set_count[7] / 2); i++)
            complete_sets.push("Endure");
        }

        //Fatal
        if (Math.floor(set_count[8] / 4) > 0) {
          complete_sets.push("Fatal");
        }

        //Despair
        if (Math.floor(set_count[10] / 4) > 0) {
          complete_sets.push("Despair");
        }

        //Vampire
        if (Math.floor(set_count[11] / 4) > 0) {
          complete_sets.push("Vampire");
        }

        //Violent
        if (Math.floor(set_count[13] / 4) > 0) {
          complete_sets.push("Violent");
        }

        //Nemesis
        if (Math.floor(set_count[14]) / 2 > 0) {
          for (i = 0; i < Math.floor(set_count[14] / 2); i++)
            complete_sets.push("Nemesis");
        }

        //Will
        if (Math.floor(set_count[15]) / 2 > 0) {
          for (i = 0; i < Math.floor(set_count[15] / 2); i++)
            complete_sets.push("Will");
        }

        //Shield (Group set)
        if (Math.floor(set_count[16]) / 2 > 0) {
          if (pos_id > 0) {
            group_sets.shield += Math.floor(set_count[16]) / 2;
            group_sets.shieldHP +=
              group_sets.shield * Math.floor((15 / 100) * monster.con * 15);
          }
          for (i = 0; i < Math.floor(set_count[16] / 2); i++)
            complete_sets.push("Shield");
        }

        //Revenge
        if (Math.floor(set_count[17]) / 2 > 0) {
          for (i = 0; i < Math.floor(set_count[17] / 2); i++)
            complete_sets.push("Revenge");
        }

        //Destroy
        if (Math.floor(set_count[18]) / 2 > 0) {
          for (i = 0; i < Math.floor(set_count[18] / 2); i++)
            complete_sets.push("Destroy");
        }

        //Fight (Group set)
        if (Math.floor(set_count[19]) / 2 > 0) {
          if (pos_id > 0) {
            group_sets.fight += Math.floor(set_count[19]) / 2;
          }
          for (i = 0; i < Math.floor(set_count[19] / 2); i++)
            complete_sets.push("Fight");
        }

        //Determination (Group set)
        if (Math.floor(set_count[20]) / 2 > 0) {
          if (pos_id > 0) {
            group_sets.fight += Math.floor(set_count[20]) / 2;
          }
          for (i = 0; i < Math.floor(set_count[20] / 2); i++)
            complete_sets.push("Determination");
        }

        //Enhance (Group set)
        if (Math.floor(set_count[21]) / 2 > 0) {
          if (pos_id > 0) {
            group_sets.fight += Math.floor(set_count[21]) / 2;
          }
          for (i = 0; i < Math.floor(set_count[21] / 2); i++)
            complete_sets.push("Enhance");
        }

        //Accuracy (Group set)
        if (Math.floor(set_count[22]) / 2 > 0) {
          group_sets.fight += Math.floor(set_count[22]) / 2;
          for (i = 0; i < Math.floor(set_count[22] / 2); i++)
            complete_sets.push("Accuracy");
        }

        //Tolerance (Group set)
        if (Math.floor(set_count[23]) / 2 > 0) {
          if (pos_id > 0) {
            group_sets.fight += Math.floor(set_count[23]) / 2;
          }
          for (i = 0; i < Math.floor(set_count[23] / 2); i++)
            complete_sets.push("Tolerance");
        }

        monster.rune_hp_flat = substats_total[1];
        monster.rune_hp_percent = substats_total[2];
        monster.rune_hp_percent_value = getHPGamePercentValue(monster);

        monster.rune_attack_flat = substats_total[3];
        monster.rune_attack_percent = substats_total[4];
        monster.rune_attack_percent_value = getATKGamePercentValue(monster);

        monster.rune_defense_flat = substats_total[5];
        monster.rune_defense_percent = substats_total[6];
        monster.rune_defense_percent_value = getDEFGamePercentValue(monster);

        monster.rune_speed = substats_total[8];

        monster.rune_crit_rate = substats_total[9];
        monster.rune_crit_damage = substats_total[10];

        monster.rune_resistance = substats_total[11];
        monster.rune_accuracy = substats_total[12];

        monster.set_count = set_count;
        monster.substats_total = substats_total;
        monster.set_complete = complete_sets;

        monster.set_hp_percent = getEnergySetBonusPercent(monster);
        monster.set_hp_percent_value = getEnergySetBonusValue(monster);

        monster.set_attack_percent = getFatalSetBonusPercent(monster);
        monster.set_attack_percent_value = getFatalSetBonusValue(monster);

        monster.set_defense_percent = getGuardSetBonusPercent(monster);
        monster.set_defense_percent_value = getGuardSetBonusValue(monster);

        monster.set_speed_percent = getSwiftSetBonusPercent(monster);
        monster.set_speed_percent_value = getSwiftSetBonusValue(monster);

        monster.set_crit_rate = getBladeSetBonusPercent(monster);
        monster.set_crit_damage = getRageSetBonusPercent(monster);

        monster.set_resistance = getEndureSetBonusPercent(monster);
        monster.set_accuracy = getFocusSetBonusPercent(monster);

        monster.bonus_hp = getHPBonusTotal(monster);
        monster.bonus_attack = getATKBonusTotal(monster);
        monster.bonus_defense = getDEFBonusTotal(monster);
        monster.bonus_speed = getSPDBonusTotal(monster);
        monster.bonus_crit_rate = getCRIRateBonusTotal(monster);
        monster.bonus_crit_damage = getCRIDamageBonusTotal(monster);
        monster.bonus_resistance = getResistBonusTotal(monster);
        monster.bonus_accuracy = getAccuracyBonusTotal(monster);

        monster.local_total_hp = getHPLocalTotal(monster);
        monster.local_total_attack = getATKLocalTotal(monster);
        monster.local_total_defense = getDEFLocalTotal(monster);
        monster.local_total_speed = getSPDLocalTotal(monster);
        monster.local_total_crit_rate = getCRIRateLocalTotal(monster);
        monster.local_total_crit_damage = getCRIDamageLocalTotal(monster);
        monster.local_total_resistance = getResistLocalTotal(monster);
        monster.local_total_accuracy = getAccuracyLocalTotal(monster);

        monster.tower_hp = getHPGlobalTower(monster, deco_list);
        monster.tower_attack_basic = getATKGlobalTower(monster, deco_list);
        monster.tower_attack_colored = getATKGlobalColoredTower(
          monster,
          deco_list
        );
        monster.tower_defense = getDEFGlobalTower(monster, deco_list);
        monster.tower_speed = getSPDGlobalTower(monster, deco_list);
        monster.tower_crit_damage = getCRIDamageGlobalTower(monster, deco_list);

        monster.flag_hp = getHPFlag(monster, deco_list, battle_command);
        monster.flag_attack = getATKFlag(monster, deco_list, battle_command);
        monster.flag_defense = getDEFFlag(monster, deco_list, battle_command);
        monster.flag_crit_damage = getCRIDamageFlag(
          monster,
          deco_list,
          battle_command
        );

        monster.leader_hp_percent = getHPLeader(
          monster,
          leader_used,
          battle_command
        );
        monster.leader_hp_value = getHPLeaderValue(
          monster,
          leader_used,
          battle_command
        );

        monster.leader_attack_percent = getATKLeader(
          monster,
          leader_used,
          battle_command
        );
        monster.leader_attack_value = getATKLeaderValue(
          monster,
          leader_used,
          battle_command
        );

        monster.leader_defense_percent = getDEFLeader(
          monster,
          leader_used,
          battle_command
        );
        monster.leader_defense_value = getDEFLeaderValue(
          monster,
          leader_used,
          battle_command
        );

        monster.leader_speed_percent = getSPDLeader(
          monster,
          leader_used,
          battle_command
        );
        monster.leader_speed_value = getSPDLeaderValue(
          monster,
          leader_used,
          battle_command
        );

        monster.leader_crit_rate = getCRIRateLeaderValue(
          monster,
          leader_used,
          battle_command
        );
        monster.leader_crit_damage = getCRIDamageLeaderValue(
          monster,
          leader_used,
          battle_command
        );
        monster.leader_resistance = getResistLeaderValue(
          monster,
          leader_used,
          battle_command
        );
        monster.leader_accuracy = getAccuracyLeaderValue(
          monster,
          leader_used,
          battle_command
        );

        monster.eff_hp = getEffectiveHpGame(monster);
        monster.eff_hp_broken = getEffectiveHpGameDefenseBroken(monster);

        monster.avg_rune_efficiency = getRuneAverageEfficiency(monster.runes);
      }
    }
    if (battle_command !== "HubUserLogin" && monster_list[0].unit_master_id) {
      for (let monster of monster_list) {
        monster.group_sets = group_sets;
        deco_list = deco_list;
        let global_substats = new Array(13).fill(0);

        //Fight (Group set)
        if (group_sets.fight > 0) {
          global_substats[4] += 8 * group_sets.fight;
        }

        //Determination (Group set)
        if (group_sets.determination > 0) {
          global_substats[6] += 8 * group_sets.determination;
        }

        //Enhance (Group set)
        if (group_sets.enhance > 0) {
          global_substats[2] += 8 * group_sets.enhance;
        }

        //Accuracy (Group set)
        if (group_sets.accuracy > 0) {
          global_substats[12] += 10 * group_sets.accuracy;
        }

        //Tolerance (Group set)
        if (group_sets.tolerance > 0) {
          global_substats[11] += 10 * group_sets.tolerance;
        }

        monster.group_hp_percent = group_sets.enhance * 8;
        monster.group_hp_value = getHPGlobalEnhance(monster);
        monster.group_attack_percent = group_sets.fight * 8;
        monster.group_attack_value = getATKGlobalFight(monster);
        monster.group_defense_percent = group_sets.determination * 8;
        monster.group_defense_value = getDEFGlobalDetermination(monster);
        monster.group_resistance = getResistGlobalTolerance(monster);
        monster.group_accuracy = getAccuracyGlobalAccuracy(monster);
        monster.group_shield_hp = group_sets.shieldHP;

        monster.final_total_hp = getHPFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_hp_shielded = getHPFinalTotalShielded(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_attack = getATKFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_defense = getDEFFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_speed = getSPDFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_crit_rate = getCRIRateFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_crit_damage = getCRIDamageFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_resistance = getResistFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
        monster.final_total_accuracy = getAccuracyFinalTotal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );

        monster.final_eff_hp = getEffectiveHpFinal(
          monster,
          deco_list,
          leader_used,
          battle_command
        );

        monster.final_eff_hp_broken = getEffectiveHpFinalDefenseBroken(
          monster,
          deco_list,
          leader_used,
          battle_command
        );
      }
    }

    return monster_list;
  };

  //************************************************************************************************************
  //SetBonus getters
  //************************************************************************************************************

  const getEnergySetBonusPercent = monster => {
    return Math.floor(monster.set_count[1] / 2) > 0
      ? Math.floor(monster.set_count[1] / 2) * 15
      : 0;
  };

  const getEnergySetBonusValue = monster => {
    return Math.floor(monster.set_count[1] / 2) > 0
      ? Math.floor(
          monster.con * 15 * ((Math.floor(monster.set_count[1] / 2) * 15) / 100)
        )
      : 0;
  };

  const getGuardSetBonusPercent = monster => {
    return Math.floor(monster.set_count[2] / 2) > 0
      ? Math.floor(monster.set_count[2] / 2) * 15
      : 0;
  };

  const getGuardSetBonusValue = monster => {
    return Math.floor(monster.set_count[2] / 2) > 0
      ? Math.floor(
          monster.def * ((Math.floor(monster.set_count[2] / 2) * 15) / 100)
        )
      : 0;
  };

  const getSwiftSetBonusPercent = monster => {
    return Math.floor(monster.set_count[3] / 4) > 0 ? 25 : 0;
  };

  const getSwiftSetBonusValue = monster => {
    return Math.floor(monster.set_count[3] / 4) > 0
      ? Math.floor(monster.spd * 0.25)
      : 0;
  };

  const getBladeSetBonusPercent = monster => {
    return Math.floor(monster.set_count[4] / 2) > 0
      ? Math.floor(monster.set_count[4] / 2) * 12
      : 0;
  };

  const getRageSetBonusPercent = monster => {
    return Math.floor(monster.set_count[5] / 4) > 0 ? 40 : 0;
  };

  const getFocusSetBonusPercent = monster => {
    return Math.floor(monster.set_count[6] / 2) > 0
      ? Math.floor(monster.set_count[6] / 2) * 20
      : 0;
  };

  const getEndureSetBonusPercent = monster => {
    return Math.floor(monster.set_count[7] / 2) > 0
      ? Math.floor(monster.set_count[7] / 2) * 20
      : 0;
  };

  const getFatalSetBonusPercent = monster => {
    return Math.floor(monster.set_count[8] / 4) > 0 ? 35 : 0;
  };
  const getFatalSetBonusValue = monster => {
    return Math.floor(monster.set_count[8] / 4) > 0
      ? Math.floor(monster.atk * 0.35)
      : 0;
  };

  //************************************************************************************************************
  //HP Getters
  //************************************************************************************************************

  const getHPGameBase = monster => {
    return monster.con * 15;
  };

  const getHPGameFlat = monster => {
    return monster.rune_hp_flat;
  };

  const getHPGamePercentValue = monster => {
    return Math.floor(monster.con * 15 * (monster.rune_hp_percent / 100));
  };

  const getHPGamePercent = monster => {
    return monster.rune_hp_percent;
  };

  const getHPBonusTotal = monster => {
    return (
      getHPGamePercentValue(monster) +
      getHPGameFlat(monster) +
      getEnergySetBonusValue(monster)
    );
  };
  const getHPLocalTotal = monster => {
    return getHPGameBase(monster) + getHPBonusTotal(monster);
  };
  const getHPGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getHPGlobalEnhance(monster) +
      getHPGlobalTower(monster, deco_list) +
      getHPLeaderValue(monster, leader_used, battle_command) +
      getHPFlag(monster, deco_list, battle_command)
    );
  };
  const getHPGlobalEnhance = monster => {
    
    return monster.set_count[21] >= 2
      ? Math.floor(
          (monster.con * 15 * Math.floor(monster.set_count[21] / 2) * 8) / 100
        )
      : 0;
  };

  const getHPGlobalTower = (monster, deco_list) => {
    let foundBuilding = deco_list.find(building => building.master_id === 8);
    return foundBuilding
      ? Math.floor(
          monster.con *
            15 *
            (mapping.buildings[8].levelToValue[foundBuilding.level] / 100)
        )
      : 0;
  };

  const getHPFlag = (monster, deco_list, battle_command) => {
    let foundBuilding = deco_list.find(building => building.master_id === 38);
    return foundBuilding &&
      battle_command &&
      mapping.commands[battle_command] == "Guild"
      ? Math.floor(
          monster.con *
            15 *
            (mapping.buildings[38].levelToValue[foundBuilding.level] / 100)
        )
      : 0;
  };

  const getHPLeader = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "HP" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
    //Math.floor((monster.con * 15 * (leader_used.amount / 100)))
  };

  const getHPLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "HP" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? Math.floor(monster.con * 15 * (leader_used.amount / 100))
      : 0;
    //Math.floor((monster.con * 15 * (leader_used.amount / 100)))
  };

  const getHPFinalTotal = (monster, deco_list, leader_used, battle_command) => {
    return (
      getHPBonusTotal(monster) +
      getHPGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getHPGameBase(monster)
    );
  };

  const getHPFinalTotalShielded = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getHPFinalTotal(monster, deco_list, leader_used, battle_command) +
      monster.group_sets.shieldHP
    );
  };

  //************************************************************************************************************
  //Defense getters
  //************************************************************************************************************

  const getDEFGameBase = monster => {
    return monster.def;
  };

  const getDEFGameFlat = monster => {
    return monster.substats_total[5];
  };

  const getDEFGamePercentValue = monster => {
    return Math.floor(monster.def * (monster.rune_defense_percent / 100));
  };

  const getDEFGamePercent = monster => {
    return monster.substats_total[6];
  };

  const getDEFBonusTotal = monster => {
    return (
      getDEFGamePercentValue(monster) +
      getDEFGameFlat(monster) +
      getGuardSetBonusValue(monster)
    );
  };

  const getDEFLocalTotal = monster => {
    return getDEFGameBase(monster) + getDEFBonusTotal(monster);
  };

  const getDEFGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getDEFGlobalDetermination(monster) +
      // monster.group_defense_value +
      getDEFGlobalTower(monster, deco_list) +
      getDEFLeaderValue(monster, leader_used, battle_command) +
      getDEFFlag(monster, deco_list, battle_command)
    );
  };
  const getDEFGlobalDetermination = monster => {
    return monster.group_sets.determination > 0
      ? Math.floor(
          (monster.con * 15 * monster.group_sets.determination * 8) / 100
        )
      : 0;
  };

  const getDEFGlobalTower = (monster, deco_list) => {
    let foundBuilding = deco_list.find(building => building.master_id === 4);
    return foundBuilding
      ? Math.floor(
          monster.def *
            (mapping.buildings[4].levelToValue[foundBuilding.level] / 100)
        )
      : 0;
  };

  const getDEFFlag = (monster, deco_list, battle_command) => {
    let foundBuilding = deco_list.find(building => building.master_id === 39);
    return foundBuilding &&
      battle_command &&
      mapping.commands[battle_command] == "Guild"
      ? Math.floor(
          monster.def *
            (mapping.buildings[39].levelToValue[foundBuilding.level] / 100)
        )
      : 0;
  };

  const getDEFLeader = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Defense" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
  };

  const getDEFLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Defense" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? Math.floor(monster.def * (leader_used.amount / 100))
      : 0;
  };

  const getDEFFinalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getDEFBonusTotal(monster) +
      getDEFGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getDEFGameBase(monster)
    );
  };

  //************************************************************************************************************
  //Attack getters
  //************************************************************************************************************

  const getATKGameBase = monster => {
    return monster.atk;
  };

  const getATKGameFlat = monster => {
    return monster.rune_attack_flat;
  };

  const getATKGamePercentValue = monster => {
    return Math.floor(monster.atk * (monster.rune_attack_percent / 100));
  };

  const getATKGamePercent = monster => {
    return monster.rune_attack_percent;
  };

  const getATKBonusTotal = monster => {
    return (
      getATKGamePercentValue(monster) +
      getATKGameFlat(monster) +
      getFatalSetBonusValue(monster)
    );
  };

  const getATKLocalTotal = monster => {
    return getATKGameBase(monster) + getATKBonusTotal(monster);
  };

  const getATKGlobalFight = monster => {
    return monster.group_sets.fight > 0
      ? Math.floor((monster.atk * (monster.group_sets.fight * 8)) / 100)
      : 0;
  };

  const getATKGlobalTower = (monster, deco_list) => {
    let foundBuilding = deco_list.find(building => building.master_id === 9);
    return foundBuilding
      ? Math.floor(
          monster.atk *
            (mapping.buildings[9].levelToValue[foundBuilding.level] / 100)
        )
      : 0;
  };

  const getATKGlobalColoredTower = (monster, deco_list) => {
    switch (monster.unit_master_id.toString().slice(-1)) {
      //case : water monster
      case "1": {
        let foundBuilding = deco_list.find(
          building => building.master_id === 16
        );
        if (foundBuilding) {
          return Math.floor(
            monster.atk *
              (mapping.buildings[16].levelToValue[foundBuilding.level] / 100)
          );
        }
      }
      //case : fire monster
      case "2": {
        let foundBuilding = deco_list.find(
          building => building.master_id === 16
        );

        if (foundBuilding) {
          return Math.floor(
            monster.atk *
              (mapping.buildings[15].levelToValue[foundBuilding.level] / 100)
          );
        }
      }
      //case : wind monster
      case "3": {
        let foundBuilding = deco_list.find(
          building => building.master_id === 17
        );

        if (foundBuilding) {
          return Math.floor(
            monster.atk *
              (mapping.buildings[17].levelToValue[foundBuilding.level] / 100)
          );
        }
      }
      //case : light monster
      case "4": {
        let foundBuilding = deco_list.find(
          building => building.master_id === 18
        );

        if (foundBuilding) {
          return Math.floor(
            monster.atk *
              (mapping.buildings[18].levelToValue[foundBuilding.level] / 100)
          );
        }
      }
      //case : dark monster
      case "5": {
        let foundBuilding = deco_list.find(
          building => building.master_id === 19
        );

        if (foundBuilding) {
          return Math.floor(
            monster.atk *
              (mapping.buildings[19].levelToValue[foundBuilding.level] / 100)
          );
        }
      }
      default: {
        return 0;
      }
    }

    return 0;
  };

  const getATKFlag = (monster, deco_list, battle_command) => {
    let foundBuilding = deco_list.find(building => building.master_id === 36);
    return foundBuilding &&
      battle_command &&
      mapping.commands[battle_command] == "Guild"
      ? Math.floor(
          monster.atk *
            (mapping.buildings[36].levelToValue[foundBuilding.level] / 100)
        )
      : 0;
  };

  const getATKLeader = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Attack Power" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
  };

  const getATKLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Attack Power" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? Math.floor(monster.atk * (leader_used.amount / 100))
      : 0;
  };

  const getATKGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getATKGlobalFight(monster) +
      getATKGlobalTower(monster, deco_list) +
      getATKGlobalColoredTower(monster, deco_list) +
      getATKLeaderValue(monster, leader_used, battle_command) +
      getATKFlag(monster, deco_list, battle_command)
    );
  };

  const getATKFinalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getATKBonusTotal(monster) +
      getATKGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getATKGameBase(monster)
    );
  };

  //************************************************************************************************************
  //Speed getters
  //************************************************************************************************************

  const getSPDGameBase = monster => {
    return monster.spd;
  };

  const getSPDGameFlat = monster => {
    return monster.substats_total[8];
  };

  const getSPDBonusTotal = monster => {
    return getSPDGameFlat(monster) + getSwiftSetBonusValue(monster);
  };

  const getSPDLocalTotal = monster => {
    return getSPDGameBase(monster) + getSPDBonusTotal(monster);
  };

  const getSPDGlobalTower = (monster, deco_list) => {
    let foundBuilding = deco_list.find(building => building.master_id === 6);
    return foundBuilding
      ? Math.floor(
          monster.spd *
            (mapping.buildings[6].levelToValue[foundBuilding.level] / 100)
        )
      : 0;
  };

  const getSPDLeader = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Attack Speed" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
  };

  const getSPDLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Attack Speed" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? Math.floor(monster.spd * (leader_used.amount / 100))
      : 0;
  };

  const getSPDGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getSPDGlobalTower(monster, deco_list) +
      getSPDLeaderValue(monster, leader_used, battle_command)
    );
  };

  const getSPDFinalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getSPDBonusTotal(monster) +
      getSPDGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getSPDGameBase(monster)
    );
  };

  //************************************************************************************************************
  //Crit rate getters
  //************************************************************************************************************

  const getCRIRateGameBase = monster => {
    return monster.critical_rate;
  };

  const getCRIRateGameFlat = monster => {
    return monster.substats_total[9];
  };

  const getCRIRateBonusTotal = monster => {
    return getCRIRateGameFlat(monster) + getBladeSetBonusPercent(monster);
  };

  const getCRIRateLocalTotal = monster => {
    return getCRIRateGameBase(monster) + getCRIRateBonusTotal(monster);
  };

  const getCRIRateGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return getCRIRateLeaderValue(monster);
  };

  const getCRIRateLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Critical Rate" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
  };

  const getCRIRateFinalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getCRIRateBonusTotal(monster) +
      getCRIRateGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getCRIRateGameBase(monster)
    );
  };

  //************************************************************************************************************
  //Crit damage getters
  //************************************************************************************************************

  const getCRIDamageGameBase = monster => {
    return monster.critical_damage;
  };

  const getCRIDamageGameFlat = monster => {
    return monster.substats_total[10];
  };

  const getCRIDamageBonusTotal = monster => {
    return getCRIDamageGameFlat(monster) + getRageSetBonusPercent(monster);
  };

  const getCRIDamageLocalTotal = monster => {
    return getCRIDamageGameBase(monster) + getCRIDamageBonusTotal(monster);
  };

  const getCRIDamageGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getCRIDamageGlobalTower(monster, deco_list) +
      getCRIDamageLeaderValue(monster, leader_used, battle_command) +
      getCRIDamageFlag(monster, deco_list, battle_command)
    );
  };

  const getCRIDamageGlobalTower = (monster, deco_list) => {
    let foundBuilding = deco_list.find(building => building.master_id === 31);

    return foundBuilding
      ? mapping.buildings[31].levelToValue[foundBuilding.level]
      : 0;
  };

  const getCRIDamageFlag = (monster, deco_list, battle_command) => {
    let foundBuilding = deco_list.find(building => building.master_id === 37);
    return foundBuilding &&
      battle_command &&
      mapping.commands[battle_command] == "Guild"
      ? mapping.buildings[37].levelToValue[foundBuilding.level]
      : 0;
  };

  const getCRIDamageLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Critical DMG" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
  };

  const getCRIDamageFinalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getCRIDamageBonusTotal(monster) +
      getCRIDamageGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getCRIDamageGameBase(monster)
    );
  };

  //************************************************************************************************************
  //Resistance getters
  //************************************************************************************************************

  const getResistGameBase = monster => {
    return monster.resist;
  };

  const getResistGameFlat = monster => {
    return monster.substats_total[11];
  };

  const getResistGamePercent = monster => {
    return monster.substats_total[11];
  };

  const getResistBonusTotal = monster => {
    return getResistGameFlat(monster) + getEndureSetBonusPercent(monster);
  };

  const getResistLocalTotal = monster => {
    return getResistGameBase(monster) + getResistBonusTotal(monster);
  };

  const getResistGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getResistGlobalTolerance(monster) +
      getResistLeaderValue(monster, leader_used, battle_command)
    );
  };
  const getResistGlobalTolerance = monster => {
    return monster.group_sets.tolerance > 0
      ? monster.group_sets.tolerance * 10
      : 0;
  };

  const getResistLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Resistance" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
  };

  const getResistFinalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getResistBonusTotal(monster) +
      getResistGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getResistGameBase(monster)
    );
  };

  //************************************************************************************************************
  //Accuracy getters
  //************************************************************************************************************

  const getAccuracyGameBase = monster => {
    return monster.accuracy;
  };

  const getAccuracyGameFlat = monster => {
    return monster.substats_total[12];
  };

  const getAccuracyGamePercent = monster => {
    return monster.substats_total[12];
  };

  const getAccuracyBonusTotal = monster => {
    return getAccuracyGameFlat(monster) + getFocusSetBonusPercent(monster);
  };

  const getAccuracyLocalTotal = monster => {
    return getAccuracyGameBase(monster) + getAccuracyBonusTotal(monster);
  };

  const getAccuracyGlobalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getAccuracyGlobalAccuracy(monster) +
      getAccuracyLeaderValue(monster, leader_used, battle_command)
    );
  };
  const getAccuracyGlobalAccuracy = monster => {
    return monster.group_sets.accuracy > 0
      ? monster.group_sets.accuracy * 10
      : 0;
  };

  const getAccuracyLeaderValue = (monster, leader_used, battle_command) => {
    return leader_used &&
      leader_used.attribute === "Accuracy" &&
      getLeadSkillQualify(monster, leader_used, battle_command)
      ? leader_used.amount
      : 0;
  };

  const getAccuracyFinalTotal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    return (
      getAccuracyBonusTotal(monster) +
      getAccuracyGlobalTotal(monster, deco_list, leader_used, battle_command) +
      getAccuracyGameBase(monster)
    );
  };

  //************************************************************************************************************
  //Effective HP Getters
  //************************************************************************************************************

  const getEffectiveHpGame = monster => {
    var noDefBreakMultiplier = 3.5;
    return Math.floor(
      (getHPLocalTotal(monster) *
        (1140 + getDEFLocalTotal(monster) * noDefBreakMultiplier)) /
        1000
    );
  };

  const getEffectiveHpGameDefenseBroken = monster => {
    var defBreakMultiplier = 1.05;
    return Math.floor(
      (getHPLocalTotal(monster) *
        (1140 + getDEFLocalTotal(monster) * defBreakMultiplier)) /
        1000
    );
  };

  const getEffectiveHpFinal = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    var noDefBreakMultiplier = 3.5;
    return Math.floor(
      (getHPFinalTotal(monster, deco_list, leader_used, battle_command) *
        (1140 +
          getDEFFinalTotal(monster, deco_list, leader_used, battle_command) *
            noDefBreakMultiplier)) /
        1000
    );
  };

  const getEffectiveHpFinalDefenseBroken = (
    monster,
    deco_list,
    leader_used,
    battle_command
  ) => {
    var defBreakMultiplier = 1.05;
    return Math.floor(
      (getHPFinalTotal(monster, deco_list, leader_used, battle_command) *
        (1140 +
          getDEFFinalTotal(monster, deco_list, leader_used, battle_command) *
            defBreakMultiplier)) /
        1000
    );
  };

  const getRuneAverageEfficiency = rune_list => {
    if (rune_list && rune_list.constructor === Array && rune_list.length != 0) {
      let numerator = 0;
      let denominator = 0;
      for (let rune of rune_list) {
        numerator = Number(getRuneEfficiency(rune).current) + numerator;
        denominator += 100;
      }

      return (numerator / denominator) * 100;
    }
  };

  const getRuneEfficiency = (rune, toFixed = 2) => {
    let ratio = 0.0;

    // main stat
    ratio +=
      mapping.rune.mainstat[rune.pri_eff_0].max[rune.class] /
      mapping.rune.mainstat[rune.pri_eff_0].max[6];

    // sub stats
    for (let i = 0; i < 3; i++) {
      if (rune[`sec_eff_${i}_${0}`] > 0) {
        let value =
          rune[`sec_eff_${i}_${3}`] && rune[`sec_eff_${i}_${3}`] > 0
            ? rune[`sec_eff_${i}_${1}`] + rune[`sec_eff_${i}_${3}`]
            : rune[`sec_eff_${i}_${1}`];
        
        ratio += value / mapping.rune.substat[rune[`sec_eff_${i}_${0}`]].max[6];
      }
    }

    // innate stat
    if (rune.prefix_eff && rune.pri_eff_0 > 0) {
      ratio += rune.pri_eff_0 / mapping.rune.substat[rune.pri_eff_0].max[6];
    }

    let efficiency = (ratio / 2.8) * 100;

    return {
      current: ((ratio / 2.8) * 100).toFixed(toFixed),
      max: (
        efficiency +
        ((Math.max(Math.ceil((12 - rune.upgrade_curr) / 3.0), 0) * 0.2) / 2.8) *
          100
      ).toFixed(toFixed)
    };
  };

  //object tools
  //

  const getRune = (monster, runeNumber) => {
    if (runeNumber >= 1 || runeNumber <= 6) {
      for (let rune of monster.runes) {
        if (rune.slot_no == runeNumber) {
          return rune;
        }
      }
      return false;
    } else {
      return "NOT A VALID RUNE NUMBER";
    }
  };

  //LEAD SKILL PARSE
  const getLeadSkillQualify = (monster, leader_used, battle_command) => {
    if (leader_used) {
      if (leader_used.area == "General") {
        return true;
      } else if (mapping.commands[battle_command] == leader_used.area) {
        return true;
      } else if (
        leader_used.area == "Element" &&
        mapping.monster.attributes[monster.attribute] == leader_used.element
      ) {
        return true;
      }
    }

    return false;
  };

  const getLeadSkillSubstats = (monster, leader_used) => {
    let substat_leader = new Array(13).fill(0);

    if (leader_used.amount) {
      if (leader_used.attribute.indexOf("Attack Speed") !== -1) {
        substat_leader[8] = leader_used.amount;
      } else if (leader_used.attribute.indexOf("Resistance") !== -1) {
        substat_leader[11] = leader_used.amount;
      } else if (leader_used.attribute.indexOf("HP") !== -1) {
        substat_leader[2] = leader_used.amount;
      } else if (leader_used.attribute.indexOf("Attack Power") !== -1) {
        substat_leader[4] = leader_used.amount;
      } else if (leader_used.attribute.indexOf("Defense") !== -1) {
        substat_leader[6] = leader_used.amount;
      } else if (leader_used.attribute.indexOf("Critical Rate") !== -1) {
        substat_leader[9] = leader_used.amount;
      } else if (leader_used.attribute.indexOf("Critical DMG") !== -1) {
        substat_leader[10] = leader_used.amount;
      } else if (leader_used.attribute.indexOf("Accuracy") !== -1) {
        substat_leader[12] = leader_used.amount;
      }
    }
    return substat_leader;
  };

  return {
    // upload methods
    extendUnitsData
  };
};
module.exports = modelService;
