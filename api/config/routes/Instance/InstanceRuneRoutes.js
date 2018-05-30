const instanceRune = {
  'POST /instanceRune': 'instanceRuneController.create',
  'GET /instanceRunes': 'instanceRuneController.getAll',
  'GET /instanceRune/:id': 'instanceRuneController.get',
  'PUT /instanceRune/:id': 'instanceRuneController.update',
  'DELETE /instanceRune/': 'instanceRuneController.destroy',
};

module.exports = instanceRune;