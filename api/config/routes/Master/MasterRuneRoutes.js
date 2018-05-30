const masterRune = {
  'POST /masterRune': 'masterRuneController.create',
  'GET /masterRunes': 'masterRuneController.getAll',
  'GET /masterRune/:id': 'masterRuneController.get',
  'PUT /masterRune/:id': 'masterRuneController.update',
  'DELETE /masterRune/': 'masterRuneController.destroy',
};

module.exports = masterRune;