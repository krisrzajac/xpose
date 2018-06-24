const instanceBattle = require("../../models/Instance/instanceBattle");
const database = require("../../../config/database");

const instanceBattleController = () => {
  const create = async (req, res) => {
    // body is part of a form-data
    const { value } = req.body;

    try {
      const model = await instanceBattle.create({
        key: value
      });

      if (!model) {
        return res.status(400).json({
          msg: "Bad Request: instanceBattle not found"
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

  const getAll = async (req, res) => {
    try {
      const models = await instanceBattle.findAll();

      if (!models) {
        return res.status(400).json({
          msg: "Bad Request: instanceBattles not found"
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

  const getTenBattleHeadlines = async (req, res) => {
    try {
      const count = await instanceBattle.count();

      const randomArray = Array.apply(null, Array(10)).map(function() {
        return Math.floor((Math.random() * count) % count);
      });
      console.log("randomArray: ", randomArray);
      console.log("****************************************");
      console.log("****************************************");

      const models = await instanceBattle.findAll({
        attributes: ["id", "battle_key"],
        where: {
          id: randomArray
        },
        include: [
          {
            association: "instanceWizards",
            attributes: ["wizard_id"],
            include: [
              {
                order: ["pos_id", "DESC"],
                association: "instanceMonsters",
                attributes: ["pos_id", "unit_master_id"],
                include: [
                  {
                    association: "monster",
                    attributes: ["name", "image_filename"]
                  }
                ]
              }
            ]
          }
        ]
      });

      if (!models) {
        return res.status(400).json({
          msg: "Bad Request: instanceBattles not found"
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
    const { battle_key } = req.params;

    try {
      const model = await instanceBattle.findOne({
        where: {
          battle_key: battle_key
        },
        include: [
          {
            association: "instanceWizards",
            include: [
              {
                association: "instanceMonsters",
                include: [
                  {
                    association: "instanceRunes"
                  },
                  {
                    association: "monster",
                    attributes: ["name", "image_filename"]
                  }
                ]
              },
              {
                association: "instanceBuildings"
              }
            ]
          }
        ]
      });

      if (!model) {
        return res.status(400).json({
          msg: "Bad Request: instanceBattle not found"
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
      const model = await instanceBattle.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: "Bad Request: instanceBattle not found"
        });
      }

      const updatedinstanceBattle = await model.update({
        key: value
      });

      return res.status(200).json({
        updatedinstanceBattle
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
      const model = instanceBattle.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: "Bad Request: instanceBattle not found"
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

  // IMPORTANT
  // don't forget to return the functions
  return {
    create,
    get,
    getAll,
    getTenBattleHeadlines
  };
};

module.exports = instanceBattleController;
