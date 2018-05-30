const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');
const userRoutes = require('./routes/userRoutes');



const monsterRoutes = require('./routes/Bestiary/monsterRoutes');
const buildingRoutes = require('./routes/Bestiary/buildingRoutes');
const homunculusSkillRoutes = require('./routes/Bestiary/homunculusSkillRoutes');
const monsterLeaderSkillRoutes = require('./routes/Bestiary/monsterLeaderSkillRoutes');
const monsterSkillRoutes = require('./routes/Bestiary/monsterSkillRoutes');
const monsterSkillEffectRoutes = require('./routes/Bestiary/monsterSkillEffectRoutes');
const monsterSkillEffectDetailRoutes = require('./routes/Bestiary/monsterSkillEffectDetailRoutes');
const monsterSkillScalingStatRoutes = require('./routes/Bestiary/monsterSkillScalingStatRoutes');
const monsterSourceRoutes = require('./routes/Bestiary/monsterSourceRoutes');
const monsterTagRoutes = require('./routes/Bestiary/monsterTagRoutes');


const instanceBattleRoutes = require('./routes/Instance/instanceBattleRoutes')
const instanceBuildingRoutes = require('./routes/Instance/instanceBuildingRoutes')
const instanceMonsterRoutes = require('./routes/Instance/instanceMonsterRoutes')
const instanceRuneRoutes = require('./routes/Instance/instanceRuneRoutes')
const instanceWizardRoutes = require('./routes/Instance/instanceWizardRoutes')


// const masterBattleRoutes = require('./routes/Master/masterBattleRoutes')
const masterBuildingRoutes = require('./routes/Master/masterBuildingRoutes')
const masterMonsterRoutes = require('./routes/Master/masterMonsterRoutes')
const masterRuneRoutes = require('./routes/Master/masterRuneRoutes')
const masterWizardRoutes = require('./routes/Master/masterWizardRoutes')



const config = {
  migrate: false,


  //privateRoutes,
  //publicRoutes,

  userRoutes,

  monsterRoutes,
  buildingRoutes,
  homunculusSkillRoutes,
  monsterLeaderSkillRoutes,
  monsterSkillRoutes,
  monsterSkillEffectRoutes,
  monsterSkillEffectDetailRoutes,
  monsterSkillScalingStatRoutes,
  monsterSourceRoutes,
  monsterTagRoutes,

  instanceBattleRoutes,
  instanceBuildingRoutes,
  instanceMonsterRoutes,
  instanceRuneRoutes,
  instanceWizardRoutes,

  // masterBattleRoutes,
  masterBuildingRoutes,
  masterMonsterRoutes,
  masterRuneRoutes,
  masterWizardRoutes,

  port: process.env.PORT || '3000',
};

module.exports = config;