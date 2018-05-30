const fs = require('fs-extra')
const best = require('./bestiary_data.json');

const DataLoader = {

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




    }



  }
}



module.exports = DataLoader;