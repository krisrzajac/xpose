const monsterSource = {
  'POST /monsterSource': 'monsterSourceController.create',
  'GET /monsterSources': 'monsterSourceController.getAll',
  'GET /monsterSource/:id': 'monsterSourceController.get',
  'PUT /monsterSource/:id': 'monsterSourceController.update',
  'DELETE /monsterSource/': 'monsterSourceController.destroy',
};

module.exports = monsterSource;