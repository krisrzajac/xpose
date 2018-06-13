const fs = require('fs-extra')
const best = require('./bestiary_data.json');
const arenaBattle = require('./BattleArenaStart.json');
const DataLoader = {


  async loadArenaDataNonAPI(DataBase) {
    const data = arenaBattle;
    //test which data arrangment it is : mine or raw from proxy
    //TODO: Test which data type is being loaded, for now using raw data from proxy

    const command = data.command;
    //Check if command is for arena
    if (command == 'BattleArenaStart') {

      let battleQueryResult = await DataBase.models['instanceBattle'].create({
        command: data.command,
        battle_key: data.battle_key,
        ts_val: data.ts_val,
        tvalue: data.tvalue,

      })



      let thisInstanceBattleId = battleQueryResult.dataValues.id
      // console.log("thisInstanceBattleId " + thisInstanceBattleId)


      let wiz1 = await DataBase.models['instanceWizard'].create({
        wizard_id: data.wizard_info.wizard_id,
        wizard_name: data.wizard_info.wizard_name,
        wizard_level: data.wizard_info.level,
        instanceBattleId: thisInstanceBattleId,
      });



      let wiz2 = await DataBase.models['instanceWizard'].create({
        wizard_id: data.opp_pvp_info.wizard_id,
        wizard_name: null,
        wizard_level: null,
        instanceBattleId: thisInstanceBattleId,
      });



      for (let monster of data.opp_unit_list) {
        let thisMonster = await DataBase.models['instanceMonster'].create(
          this.createMonsterObject(monster, thisInstanceBattleId, wiz2.dataValues.id)
        );

        for (let rune of monster.unit_info.runes) {
          //main stat
          rune.pri_eff_0 = rune.pri_eff[0];
          rune.pri_eff_1 = rune.pri_eff[1];

          //innate stat
          rune.prefix_eff_0 = rune.prefix_eff[0];
          rune.prefix_eff_1 = rune.prefix_eff[1];

          let hasStats = new Array(12).fill(0);



          if (rune.sec_eff) {

            for (let i = 0; i < rune.sec_eff.length; i++) {

              for (let j = 0; j < rune.sec_eff[i].length; j++) {

                rune[`sec_eff_${i}_${j}`] = rune.sec_eff[i][j];

              }
              //log stat types into hasStats array, checked later to add booleans 'hasStuff'
              hasStats[rune.sec_eff[i][0]] = rune.sec_eff[i][1]
            }

          }

          rune.has_accuracy = hasStats[12] ? true : false
          rune.has_atk = hasStats[3] || hasStats[4] ? true : false
          rune.has_crit_dmg = hasStats[10] ? true : false
          rune.has_crit_rate = hasStats[9] ? true : false
          rune.has_def = hasStats[5] || hasStats[6] ? true : false
          rune.has_hp = hasStats[1] || hasStats[2] ? true : false
          rune.has_resist = hasStats[11] ? true : false
          rune.has_speed = hasStats[8] ? true : false

          rune.instanceBattleId = thisInstanceBattleId;

          rune.instanceMonsterId = thisMonster.dataValues.id;

          rune.instanceWizardId = wiz2.dataValues.id


          await DataBase.models['instanceRune'].create(
            rune
          )
        }
      }
      // console.log(data.deco_list)
      for (let building of data.deco_list) {
        building.instanceBattleId = thisInstanceBattleId;
        building.instanceWizardId = wiz2.dataValues.id;

        await DataBase.models['instanceBuilding'].create(building);
      }

    }
  },

  createMonsterObject(monster, instanceBattleId, instanceWizardId) {
    let newMon = {};

    newMon.pos_id = monster.pos_id;


    newMon.unit_id = monster.unit_info.unit_id;
    newMon.wizard_id = monster.unit_info.wizard_id;
    newMon.unit_master_id = monster.unit_info.unit_master_id;
    newMon.unit_level = monster.unit_info.unit_level;
    newMon.class = monster.unit_info.class;


    newMon.con = monster.unit_info.con;
    newMon.atk = monster.unit_info.atk;
    newMon.def = monster.unit_info.def;
    newMon.spd = monster.unit_info.spd;
    newMon.resist = monster.unit_info.resist;
    newMon.accuracy = monster.unit_info.accuracy;
    newMon.critical_rate = monster.unit_info.critical_rate;
    newMon.critical_damage = monster.unit_info.critical_damage;

    for (let skill in monster.unit_info.skills) {

      let arrLength = monster.unit_info.skills.length;
      for (let i = 0; i < arrLength; i++) {
        newMon[`skill_${i}_1`] = monster.unit_info.skills[i][1]
      }


    }

    newMon.instanceBattleId = instanceBattleId;
    newMon.instanceWizardId = instanceWizardId;
    newMon.homunculus = monster.unit_info.homunculus;
    return newMon;
  },


  loadMyFullData(DataBase) {

  },


  loadBestiaryData(DataBase) {

    for (let besticle of best) {

      //handle special cases ("arrays" of characters)
      //
      besticle.fields.id = besticle.pk;
      if (besticle.model == "building") {
        besticle.fields.stat_bonus = besticle.fields.stat_bonus.replace(/[\"\'\[\]\s]/g, '').split(',');
        besticle.fields.upgrade_cost = besticle.fields.upgrade_cost.replace(/[\"\'\[\]\s]/g, '').split(',');
      } else if (besticle.model == "monsterSkill") {
        besticle.fields.multiplier_formula_raw = besticle.fields.multiplier_formula_raw.replace(/[\[\]\"\s]/g, '').split(',');

      }
      DataBase.models[besticle.model].create(besticle.fields);


    }


    for (let besticle of best) {

      //if table is monster link skills through join table
      if (besticle.model == "monster") {
        if (besticle.fields.leader_skill != null) {

          DataBase.models["monster"].update({
            monsterLeaderSkillId: besticle.fields.leader_skill
          }, {
            where: {
              id: besticle.pk
            }
          })

        }

        besticle.fields.skills.forEach(x => {
          DataBase.models["Monster_Skills"].create({
            monsterId: besticle.pk,
            monsterSkillId: x,
          })
        })


      }
      //if table is skills link table to effects and details
      else if (besticle.model == "monsterSkill") {

        if (besticle.fields.skill_effect != null && besticle.fields.skill_effect.length > 0) {
          besticle.fields.skill_effect.forEach(x => {
            DataBase.models["MonsterSkill_SkillEffect"].create({
              monsterSkillId: besticle.pk,
              monsterSkillEffectId: x
            })
          })

        }

        if (besticle.fields.scaling_stats != null && besticle.fields.scaling_stats.length > 0) {

          besticle.fields.scaling_stats.forEach(x => {
            DataBase.models["MonsterSkill_ScalingStats"].create({
              monsterSkillId: besticle.pk,
              monsterSkillScalingStatId: x
            })
          })

        }

      } else if (besticle.model == "monsterSkillEffectDetail") {

        DataBase.models["monsterSkillEffectDetail"].update({
          skillId: besticle.fields.skill,
          effectId: besticle.fields.effect
        }, {
          where: {
            id: besticle.pk
          }
        })

      } else if (besticle.model == "homunculusSkill") {

        DataBase.models["homunculusSkill"].update({
          skillId: besticle.fields.skill
        }, {
          where: {
            id: besticle.pk
          }
        })

        if (besticle.fields.monsters != null && besticle.fields.monsters.length > 0) {

          besticle.fields.monsters.forEach(x => {

            DataBase.models["HomunculusSkill_Monsters"].create({
              homunculusSkillId: besticle.pk,
              monsterId: x
            })

          })

        }

      }

      //

    }

    //

  }



}



module.exports = DataLoader;