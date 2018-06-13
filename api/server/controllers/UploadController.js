const database = require("../../config/database");
const uploadService = require("../services/upload.service");

const uploadController = () => {
  const create = async (req, res) => {
    // body is part of a form-data
    const { value } = req.body;

    try {
      // console.log("**********************")
      // console.log("req.body");
      // console.log("**********************")
      // console.log(req.body);
      if (!req.body.command) {
        return res.status(400).json({
          msg: "Bad Request: Not a battle"
        });
      }
      switch (req.body.command) {
        case "HubUserLogin": {
          req.body = uploadService().formatDataHubUserLogin(req.body);

          let wizardPlayer = await database.models["instanceWizard"].create(
            req.body.wizardPlayer
          );

          for (let monster of req.body.monsterPlayer) {
            monster.instanceWizardId = wizardPlayer.id;
            if (monster.unit_master_id <= 21900) {
              let monsterPlayer = await database.models[
                "instanceMonster"
              ].create(monster);
              if (monster.runes) {
                for (let rune of monster.runes) {
                  // rune.instanceBattleId = battle.id;
                  rune.instanceWizardId = wizardPlayer.id;
                  rune.instanceMonsterId = monsterPlayer.id;
                  await database.models["instanceRune"].create(rune);
                }
              }
            }
          }
          for (let building of req.body.buildingsPlayer) {
            // building.instanceBattleId = battle.id;
            building.instanceWizardId = wizardPlayer.id;
            await database.models["instanceBuilding"].create(building);
          }

          return res.status(200).json({
            wizardPlayer
          });

          break;
        }

        case "BattleArenaStart": {
          req.body = uploadService().formatDataArena(req.body);

          let battle = await database.models["instanceBattle"].create(
            req.body.battle
          );

          req.body.wizardPlayer.instanceBattleId = battle.id;
          req.body.wizardOpponent.instanceBattleId = battle.id;

          let wizardPlayer = await database.models["instanceWizard"].create(
            req.body.wizardPlayer
          );
          let wizardOpponent = await database.models["instanceWizard"].create(
            req.body.wizardOpponent
          );

          for (let monster of req.body.monsterPlayer) {
            let dbMon = [];

            if (monster.unit_master_id === undefined) {

              dbMon = await database.models["instanceMonster"].findAll({

                limit: 1,
                where: {
                  unit_id: monster.unit_id,
                  unit_master_id: {
                    [database.Op.ne]: null
                  }
                },
                include: [
                  {
                    as: "runes",
                    association: "instanceRunes"
                  }
                ],
                order: [["createdAt", "DESC"]]
              });

            }
    
            //THIS CHECKS FOR EXISTING DATA VALUES FOR MY ARENA MONSTERS
            if (dbMon.length != 0) {
              monster = {...dbMon[0].dataValues, ...monster};
              monster.id = null;
              console.log(monster);
              monster.runes = [];

              for (let rune of monster.instanceRunes) {
                rune.dataValues.id = null;
                monster.runes.push(rune.dataValues);
              }
            }

            monster.instanceBattleId = battle.id;
            monster.instanceWizardId = wizardPlayer.id;
            let monsterPlayer = await database.models["instanceMonster"].create(
              monster
            );

            if (monster.runes) {
              for (let rune of monster.runes) {
                rune.instanceBattleId = battle.id;
                rune.instanceWizardId = wizardPlayer.id;
                rune.instanceMonsterId = monsterPlayer.id;
                await database.models["instanceRune"].create(rune);
              }
            }
          }

          for (let monster of req.body.monsterOpponent) {
            monster.instanceBattleId = battle.id;
            monster.instanceWizardId = wizardOpponent.id;
            let monsterOpponent = await database.models[
              "instanceMonster"
            ].create(monster);
            for (let rune of monster.runes) {
              rune.instanceBattleId = battle.id;
              rune.instanceWizardId = wizardOpponent.id;
              rune.instanceMonsterId = monsterOpponent.id;
              await database.models["instanceRune"].create(rune);
            }
          }
          for (let building of req.body.buildingsOpponent) {
            building.instanceBattleId = battle.id;
            building.instanceWizardId = wizardOpponent.id;
            await database.models["instanceBuilding"].create(building);
          }

          return res.status(200).json({
            battle
          });

          break;
        }
      }
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: "Internal server error"
      });
    }
  };

  const getAll = async (req, res) => {
    try {
      const models = await uploadController.findAll();

      if (!models) {
        return res.status(400).json({
          msg: "Bad Request: uploadControllers not found"
        });
      }

      return res.status(200).json({
        models
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: "Internal server error"
      });
    }
  };

  const get = async (req, res) => {
    // params is part of an url
    const { id } = req.params;

    try {
      const model = await uploadController.findOne({
        where: {
          id
        }
      });

      if (!model) {
        return res.status(400).json({
          msg: "Bad Request: uploadController not found"
        });
      }

      return res.status(200).json({
        model
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: "Internal server error"
      });
    }
  };

  const update = async (req, res) => {
    // params is part of an url
    const { id } = req.params;

    // body is part of form-data
    const { value } = req.body;

    try {
      const model = await uploadController.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: "Bad Request: uploadController not found"
        });
      }

      const updateduploadController = await model.update({
        key: value
      });

      return res.status(200).json({
        updateduploadController
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: "Internal server error"
      });
    }
  };

  const destroy = async (req, res) => {
    // params is part of an url
    const { id } = req.params;

    try {
      const model = uploadController.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: "Bad Request: uploadController not found"
        });
      }

      await model.destroy();

      return res.status(200).json({
        msg: "Successfully destroyed model"
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: "Internal server error"
      });
    }
  };

  const upsert = async (model, values, condition) => {
    return database.models[model]
      .findOne({ where: condition })
      .then(function(obj) {
        if (obj) {
          // update
          return obj.update(values);
        } else {
          // insert
          return database.models[model].create(values);
        }
      });
  };

  // IMPORTANT
  // don't forget to return the functions
  return {
    create,
    getAll,
    get,
    update,
    destroy
  };
};

module.exports = uploadController;
