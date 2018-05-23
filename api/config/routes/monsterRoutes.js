const monster = {
  'POST /monster': 'monsterController.create',
  'GET /monsters': 'monsterController.getAll',
  'GET /monster/:id': 'monsterController.get',
  'PUT /monster/:id': 'monsterController.update',
  'DELETE /monster/': 'monsterController.destroy',
};

module.exports = monster;