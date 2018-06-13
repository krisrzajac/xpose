const monsterSkill = {
  'POST /monsterSkill': 'monsterSkillController.create',
  'GET /monsterSkills': 'monsterSkillController.getAll',
  'GET /monsterSkill/:id': 'monsterSkillController.get',
  'PUT /monsterSkill/:id': 'monsterSkillController.update',
  'DELETE /monsterSkill/': 'monsterSkillController.destroy',
};

module.exports = monsterSkill;
