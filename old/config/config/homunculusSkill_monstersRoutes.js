const homunculusSkill_monsters = {
  'POST /homunculusSkill_monsters': 'homunculusSkill_monstersController.create',
  'GET /homunculusSkill_monsterss': 'homunculusSkill_monstersController.getAll',
  'GET /homunculusSkill_monsters/:id': 'homunculusSkill_monstersController.get',
  'PUT /homunculusSkill_monsters/:id': 'homunculusSkill_monstersController.update',
  'DELETE /homunculusSkill_monsters/': 'homunculusSkill_monstersController.destroy',
};

module.exports = homunculusSkill_monsters;