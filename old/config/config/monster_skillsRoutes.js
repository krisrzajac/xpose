const monster_skills = {
  'POST /monster_skills': 'monster_skillsController.create',
  'GET /monster_skillss': 'monster_skillsController.getAll',
  'GET /monster_skills/:id': 'monster_skillsController.get',
  'PUT /monster_skills/:id': 'monster_skillsController.update',
  'DELETE /monster_skills/': 'monster_skillsController.destroy',
};

module.exports = monster_skills;