const masterMonster = {
  'POST /masterMonster': 'masterMonsterController.create',
  'GET /masterMonsters': 'masterMonsterController.getAll',
  'GET /masterMonster/:id': 'masterMonsterController.get',
  'PUT /masterMonster/:id': 'masterMonsterController.update',
  'DELETE /masterMonster/': 'masterMonsterController.destroy',
};

module.exports = masterMonster;
