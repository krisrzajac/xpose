const monsterSkillScalingStat = {
  'POST /monsterSkillScalingStat': 'monsterSkillScalingStatController.create',
  'GET /monsterSkillScalingStats': 'monsterSkillScalingStatController.getAll',
  'GET /monsterSkillScalingStat/:id': 'monsterSkillScalingStatController.get',
  'PUT /monsterSkillScalingStat/:id': 'monsterSkillScalingStatController.update',
  'DELETE /monsterSkillScalingStat/': 'monsterSkillScalingStatController.destroy',
};

module.exports = monsterSkillScalingStat;