/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const cors = require('cors');

/**
 * server configuration
 */
const config = require('../config/');
const dbService = require('./services/db.service');
const auth = require('./policies/auth.policy');

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const app = express();
const server = http.Server(app);



const monsterRoutes = mapRoutes(config.monsterRoutes, 'server/controllers/');

//const runeInstanceRoutes = mapRoutes(config.runeInstanceRoutes, 'server/controllers/');
//const buildingInstanceRoutes = mapRoutes(config.buildingInstanceRoutes, 'server/controllers/');
//const monsterInstanceRoutes = mapRoutes(config.monsterInstanceRoutes, 'server/controllers/');
//const monsterInstance_tagsRoutes = mapRoutes(config.monsterInstance_tagsRoutes, 'server/controllers/');
const buildingRoutes = mapRoutes(config.buildingRoutes, 'server/controllers/');
const homunculusSkillRoutes = mapRoutes(config.homunculusSkillRoutes, 'server/controllers/');
const monsterLeaderSkillRoutes = mapRoutes(config.monsterLeaderSkillRoutes, 'server/controllers/');
const monsterSkillRoutes = mapRoutes(config.monsterSkillRoutes, 'server/controllers/');
const monsterSkillEffectRoutes = mapRoutes(config.monsterSkillEffectRoutes, 'server/controllers/');
const monsterSkillEffectDetailRoutes = mapRoutes(config.monsterSkillEffectDetailRoutes, 'server/controllers/');
const monsterSkillScalingStatRoutes = mapRoutes(config.monsterSkillScalingStatRoutes, 'server/controllers/');
const monsterSourceRoutes = mapRoutes(config.monsterSourceRoutes, 'server/controllers/');
const monsterTagRoutes = mapRoutes(config.monsterTagRoutes, 'server/controllers/');
const userRoutes = mapRoutes(config.userRoutes, 'server/controllers/');
// const homunculusSkill_monstersRoutes = mapRoutes(config.homunculusSkill_monstersRoutes, 'server/controllers/');
// const monster_skillsRoutes = mapRoutes(config.monster_skillsRoutes, 'server/controllers/');
// const monster_sourceRoutes = mapRoutes(config.monster_sourceRoutes, 'server/controllers/');
// const monsterSkill_scalingStatsRoutes = mapRoutes(config.monsterSkill_scalingStatsRoutes, 'server/controllers/');
// const monsterSkill_skillEffectRoutes = mapRoutes(config.monsterSkill_skillEffectRoutes, 'server/controllers/');



const DB = dbService(environment, config.migrate).start();



// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// secure your private routes with jwt authentication middleware
// app.all('/private/*', (req, res, next) => auth(req, res, next));



// fill routes for express appliction
//app.use('/api', runeInstanceRoutes);
//app.use('/api', buildingInstanceRoutes);
//app.use('/api', monsterInstanceRoutes);

app.use('/api', monsterRoutes);
app.use('/api', buildingRoutes);
app.use('/api', homunculusSkillRoutes);
app.use('/api', monsterLeaderSkillRoutes);
app.use('/api', monsterSkillRoutes);
app.use('/api', monsterSkillEffectRoutes);
app.use('/api', monsterSkillEffectDetailRoutes);
app.use('/api', monsterSkillScalingStatRoutes);
app.use('/api', monsterSourceRoutes);
app.use('/api', monsterTagRoutes);
app.use('/api', userRoutes);

//app.use('/api', monster_skillsRoutes);
//app.use('/api', monster_sourceRoutes);
//app.use('/api', monsterSkill_scalingStatsRoutes);
//app.use('/api', monsterSkill_skillEffectRoutes);
//app.use('/api', homunculusSkill_monstersRoutes);
//app.use('/api', monsterInstance_tagsRoutes);
server.listen(config.port, () => {
  if (environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  return DB;
});