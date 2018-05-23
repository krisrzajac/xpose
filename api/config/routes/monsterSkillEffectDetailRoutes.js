const monsterSkillEffectDetail = {
  'POST /monsterSkillEffectDetail': 'monsterSkillEffectDetailController.create',
  'GET /monsterSkillEffectDetails': 'monsterSkillEffectDetailController.getAll',
  'GET /monsterSkillEffectDetail/:id': 'monsterSkillEffectDetailController.get',
  'PUT /monsterSkillEffectDetail/:id': 'monsterSkillEffectDetailController.update',
  'DELETE /monsterSkillEffectDetail/': 'monsterSkillEffectDetailController.destroy',
};

module.exports = monsterSkillEffectDetail;