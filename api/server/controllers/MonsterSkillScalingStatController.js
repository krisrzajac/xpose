const monsterSkillScalingStat = require('../models/monsterSkillScalingStat');

const monsterSkillScalingStatController = () => {
  const create = async (req, res) => {
    // body is part of a form-data
    const {
      value
    } = req.body;

    try {
      const model = await monsterSkillScalingStat.create({
        key: value
      });

      if (!model) {
        return res.status(400).json({
          msg: 'Bad Request: monsterSkillScalingStat not found'
        });
      }

      return res.status(200).json({
        model
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: 'Internal server error'
      });
    }
  };

  const getAll = async (req, res) => {
    try {
      const models = await monsterSkillScalingStat.findAll();

      if (!models) {
        return res.status(400).json({
          msg: 'Bad Request: monsterSkillScalingStats not found'
        });
      }

      return res.status(200).json({
        models
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: 'Internal server error'
      });
    }
  };

  const get = async (req, res) => {
    // params is part of an url
    const {
      id
    } = req.params;

    try {
      const model = await monsterSkillScalingStat.findOne({
        where: {
          id,
        },
      });

      if (!model) {
        return res.status(400).json({
          msg: 'Bad Request: monsterSkillScalingStat not found'
        });
      }

      return res.status(200).json({
        model
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: 'Internal server error'
      });
    }
  };

  const update = async (req, res) => {
    // params is part of an url
    const {
      id
    } = req.params;

    // body is part of form-data
    const {
      value
    } = req.body;

    try {
      const model = await monsterSkillScalingStat.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: 'Bad Request: monsterSkillScalingStat not found'
        });
      }

      const updatedmonsterSkillScalingStat = await model.update({
        key: value,
      });

      return res.status(200).json({
        updatedmonsterSkillScalingStat
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: 'Internal server error'
      });
    }
  };

  const destroy = async (req, res) => {
    // params is part of an url
    const {
      id
    } = req.params;

    try {
      const model = monsterSkillScalingStat.findById(id);

      if (!model) {
        return res.status(400).json({
          msg: 'Bad Request: monsterSkillScalingStat not found'
        })
      }

      await model.destroy();

      return res.status(200).json({
        msg: 'Successfully destroyed model'
      });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({
        msg: 'Internal server error'
      });
    }
  };

  // IMPORTANT
  // don't forget to return the functions
  return {
    create,
    getAll,
    get,
    update,
    destroy,
  };
};

module.exports = monsterSkillScalingStatController;