const monster_source = {
  'POST /monster_source': 'monster_sourceController.create',
  'GET /monster_sources': 'monster_sourceController.getAll',
  'GET /monster_source/:id': 'monster_sourceController.get',
  'PUT /monster_source/:id': 'monster_sourceController.update',
  'DELETE /monster_source/': 'monster_sourceController.destroy',
};

module.exports = monster_source;