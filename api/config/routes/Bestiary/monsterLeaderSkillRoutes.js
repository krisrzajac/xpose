const monsterLeaderSkill = {
  'POST /monsterLeaderSkill': 'monsterLeaderSkillController.create',
  'GET /monsterLeaderSkills': 'monsterLeaderSkillController.getAll',
  'GET /monsterLeaderSkill/:id': 'monsterLeaderSkillController.get',
  'PUT /monsterLeaderSkill/:id': 'monsterLeaderSkillController.update',
  'DELETE /monsterLeaderSkill/': 'monsterLeaderSkillController.destroy',
};

module.exports = monsterLeaderSkill;