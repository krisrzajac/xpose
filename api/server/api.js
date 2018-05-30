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



const monsterRoutes = mapRoutes(config.monsterRoutes, 'server/controllers/Bestiary/');
const buildingRoutes = mapRoutes(config.buildingRoutes, 'server/controllers/Bestiary/');
const homunculusSkillRoutes = mapRoutes(config.homunculusSkillRoutes, 'server/controllers/Bestiary/');
const monsterLeaderSkillRoutes = mapRoutes(config.monsterLeaderSkillRoutes, 'server/controllers/Bestiary/');
const monsterSkillRoutes = mapRoutes(config.monsterSkillRoutes, 'server/controllers/Bestiary/');
const monsterSkillEffectRoutes = mapRoutes(config.monsterSkillEffectRoutes, 'server/controllers/Bestiary/');
const monsterSkillEffectDetailRoutes = mapRoutes(config.monsterSkillEffectDetailRoutes, 'server/controllers/Bestiary/');
const monsterSkillScalingStatRoutes = mapRoutes(config.monsterSkillScalingStatRoutes, 'server/controllers/Bestiary/');
const monsterSourceRoutes = mapRoutes(config.monsterSourceRoutes, 'server/controllers/Bestiary/');
const monsterTagRoutes = mapRoutes(config.monsterTagRoutes, 'server/controllers/Bestiary/');



const instanceBattleRoutes = mapRoutes(config.instanceBattleRoutes, 'server/controllers/Instance/');
const instanceBuildingRoutes = mapRoutes(config.instanceBuildingRoutes, 'server/controllers/Instance/');
const instanceMonsterRoutes = mapRoutes(config.instanceMonsterRoutes, 'server/controllers/Instance/');
const instanceRuneRoutes = mapRoutes(config.instanceRuneRoutes, 'server/controllers/Instance/');
const instanceWizardRoutes = mapRoutes(config.instanceWizardRoutes, 'server/controllers/Instance/');

const masterBuildingRoutes = mapRoutes(config.masterBuildingRoutes, 'server/controllers/Master/');
const masterMonsterRoutes = mapRoutes(config.masterMonsterRoutes, 'server/controllers/Master/');
const masterRuneRoutes = mapRoutes(config.masterRuneRoutes, 'server/controllers/Master/');
const masterWizardRoutes = mapRoutes(config.masterWizardRoutes, 'server/controllers/Master/');



const userRoutes = mapRoutes(config.userRoutes, 'server/controllers/');



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

//

app.use('/api', instanceBattleRoutes);
app.use('/api', instanceBuildingRoutes);
app.use('/api', instanceMonsterRoutes);
app.use('/api', instanceRuneRoutes);
app.use('/api', instanceWizardRoutes);

//

app.use('/api', masterBuildingRoutes);
app.use('/api', masterMonsterRoutes);
app.use('/api', masterRuneRoutes);
app.use('/api', masterWizardRoutes);



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