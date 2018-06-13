const monsterSkillEffect = {
  'POST /monsterSkillEffect': 'monsterSkillEffectController.create',
  'GET /monsterSkillEffects': 'monsterSkillEffectController.getAll',
  'GET /monsterSkillEffect/:id': 'monsterSkillEffectController.get',
  'PUT /monsterSkillEffect/:id': 'monsterSkillEffectController.update',
  'DELETE /monsterSkillEffect/': 'monsterSkillEffectController.destroy',
};

module.exports = monsterSkillEffect;
