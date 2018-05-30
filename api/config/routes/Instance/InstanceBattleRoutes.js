const instanceBattle = {
  'POST /instanceBattle': 'instanceBattleController.create',
  'GET /instanceBattles': 'instanceBattleController.getAll',
  'GET /instanceBattle/:id': 'instanceBattleController.get',
  'PUT /instanceBattle/:id': 'instanceBattleController.update',
  'DELETE /instanceBattle/': 'instanceBattleController.destroy',
};

module.exports = instanceBattle;