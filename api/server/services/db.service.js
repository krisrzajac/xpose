const database = require('../../config/database');

const dataLoader = require('../dataLoader');

const dbService = (environment, migrate) => {
  const authenticateDB = () => database.authenticate();

  const dropDB = () => database.drop();

  const dropDBCascade = () => database.drop({
    cascade: true
  });

  const syncDB = () => database.sync();

  const godDropDB = async () => {
    await database.query("DROP SCHEMA public CASCADE;");
    await database.query("CREATE SCHEMA public;");
  }

  const assDB = () => {
    console.log(database.models)
    Object.keys(database.models).forEach(function (modelName) {
      if (database.models[modelName].associate) {
        database.models[modelName].associate(database.models);
      }
    });
  }

  const successfulDBStart = () => (
    console.info('connection to the database has been established successfully')
  );

  const errorDBStart = (err) => (
    console.info('unable to connect to the database:', err)
  );

  const wrongEnvironment = () => {
    console.warn(`only development, staging, test and production are valid NODE_ENV variables but ${environment} is specified`);
    return process.exit(1);
  };

  const startMigrateTrue = async () => {
    try {
      await syncDB();
      successfulDBStart();
    } catch (err) {
      errorDBStart(err);
    }
  };

  const startMigrateFalse = async () => {
    try {
      // await dropDB();
      // await dropDBCascade();
      // await godDropDB();
      await assDB();
      await syncDB();
      
      //heres data!
      //
      // await dataLoader.loadBestiaryData(database);
      await dataLoader.loadArenaDataNonAPI(database);
      await successfulDBStart();
    } catch (err) {
      errorDBStart(err);
    }
  };

  const startDev = async () => {
    try {
      await authenticateDB();

      if (migrate) {
        return startMigrateTrue();
      }

      return startMigrateFalse();
    } catch (err) {
      return errorDBStart(err);
    }
  };

  const startStage = async () => {
    try {
      await authenticateDB();

      if (migrate) {
        return startMigrateTrue();
      }

      return startMigrateFalse();
    } catch (err) {
      return errorDBStart(err);
    }
  };

  const startTest = async () => {
    try {
      await authenticateDB();
      await startMigrateFalse();
    } catch (err) {
      errorDBStart(err);
    }
  };

  const startProd = async () => {
    try {
      await authenticateDB();
      await startMigrateFalse();
    } catch (err) {
      errorDBStart(err);
    }
  };

  const start = async () => {
    switch (environment) {
    case 'development':
      await startDev();
      break;
    case 'staging':
      await startStage();
      break;
    case 'testing':
      await startTest();
      break;
    case 'production':
      await startProd();
      break;
    default:
      await wrongEnvironment();
    }
  };

  return {
    start,
  };
};

module.exports = dbService;