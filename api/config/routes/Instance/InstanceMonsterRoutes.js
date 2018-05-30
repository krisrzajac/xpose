const instanceMonster = {
  'POST /instanceMonster': 'instanceMonsterController.create',
  'GET /instanceMonsters': 'instanceMonsterController.getAll',
  'GET /instanceMonster/:id': 'instanceMonsterController.get',
  'PUT /instanceMonster/:id': 'instanceMonsterController.update',
  'DELETE /instanceMonster/': 'instanceMonsterController.destroy',
};

module.exports = instanceMonster;