const monsterSkill_skillEffect = {
  'POST /monsterSkill_skillEffect': 'monsterSkill_skillEffectController.create',
  'GET /monsterSkill_skillEffects': 'monsterSkill_skillEffectController.getAll',
  'GET /monsterSkill_skillEffect/:id': 'monsterSkill_skillEffectController.get',
  'PUT /monsterSkill_skillEffect/:id': 'monsterSkill_skillEffectController.update',
  'DELETE /monsterSkill_skillEffect/': 'monsterSkill_skillEffectController.destroy',
};

module.exports = monsterSkill_skillEffect;