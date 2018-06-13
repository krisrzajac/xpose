const instanceBattle = {
  // 'POST /instanceBattle': 'instanceBattleController.create',

  // 'PUT /instanceBattle/:battle_key': 'instanceBattleController.update',
  // 'DELETE /instanceBattle/': 'instanceBattleController.destroy',
  'GET /instanceBattle/:battle_key': 'instanceBattleController.get',
  'GET /instanceBattles': 'instanceBattleController.getAll',
  'GET /instanceBattleHeadlines': 'instanceBattleController.getTenBattleHeadlines',
};

module.exports = instanceBattle;