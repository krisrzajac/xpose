const monsterTag = {
  'POST /monsterTag': 'monsterTagController.create',
  'GET /monsterTags': 'monsterTagController.getAll',
  'GET /monsterTag/:id': 'monsterTagController.get',
  'PUT /monsterTag/:id': 'monsterTagController.update',
  'DELETE /monsterTag/': 'monsterTagController.destroy',
};

module.exports = monsterTag;
