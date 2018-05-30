const homunculusSkill = {
  'POST /homunculusSkill': 'homunculusSkillController.create',
  'GET /homunculusSkills': 'homunculusSkillController.getAll',
  'GET /homunculusSkill/:id': 'homunculusSkillController.get',
  'PUT /homunculusSkill/:id': 'homunculusSkillController.update',
  'DELETE /homunculusSkill/': 'homunculusSkillController.destroy',
};

module.exports = homunculusSkill;