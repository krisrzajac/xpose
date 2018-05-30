const monsterInstance = {
  'POST /monsterInstance': 'monsterInstanceController.create',
  'GET /monsterInstances': 'monsterInstanceController.getAll',
  'GET /monsterInstance/:id': 'monsterInstanceController.get',
  'PUT /monsterInstance/:id': 'monsterInstanceController.update',
  'DELETE /monsterInstance/': 'monsterInstanceController.destroy',
};

module.exports = monsterInstance;