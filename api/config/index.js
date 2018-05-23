const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');
const userRoutes = require('./routes/userRoutes');
const monsterRoutes = require('./routes/monsterRoutes');
const runeInstanceRoutes = require('./routes/runeInstanceRoutes');
const buildingRoutes = require('./routes/buildingRoutes');
const buildingInstanceRoutes = require('./routes/buildingInstanceRoutes');
const homunculusSkillRoutes = require('./routes/homunculusSkillRoutes');
const homunculusSkill_monstersRoutes = require('./routes/homunculusSkill_monstersRoutes');
const monster_skillsRoutes = require('./routes/monster_skillsRoutes');
const monster_sourceRoutes = require('./routes/monster_sourceRoutes');
const monsterInstanceRoutes = require('./routes/monsterInstanceRoutes');
const monsterInstance_tagsRoutes = require('./routes/monsterInstance_tagsRoutes');
const monsterLeaderSkillRoutes = require('./routes/monsterLeaderSkillRoutes');
const monsterSkillRoutes = require('./routes/monsterSkillRoutes');
const monsterSkill_scalingStatsRoutes = require('./routes/monsterSkill_scalingStatsRoutes');
const monsterSkill_skillEffectRoutes = require('./routes/monsterSkill_skillEffectRoutes');
const monsterSkillEffectRoutes = require('./routes/monsterSkillEffectRoutes');
const monsterSkillEffectDetailRoutes = require('./routes/monsterSkillEffectDetailRoutes');
const monsterSkillScalingStatRoutes = require('./routes/monsterSkillScalingStatRoutes');
const monsterSourceRoutes = require('./routes/monsterSourceRoutes');
const monsterTagRoutes = require('./routes/monsterTagRoutes');


const config = {
  migrate: false,
  //privateRoutes,
  //publicRoutes,

  monsterRoutes,
  runeInstanceRoutes,
  buildingRoutes,
  buildingInstanceRoutes,
  homunculusSkillRoutes,
  homunculusSkill_monstersRoutes,
  monster_skillsRoutes,
  monster_sourceRoutes,
  monsterInstanceRoutes,
  monsterInstance_tagsRoutes,
  monsterLeaderSkillRoutes,
  monsterSkillRoutes,
  monsterSkill_scalingStatsRoutes,
  monsterSkill_skillEffectRoutes,
  monsterSkillEffectRoutes,
  monsterSkillEffectDetailRoutes,
  monsterSkillScalingStatRoutes,
  monsterSourceRoutes,
  monsterTagRoutes,
  userRoutes,
  port: process.env.PORT || '3000',
};

module.exports = config;