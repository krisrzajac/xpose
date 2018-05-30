const Model = {
  'POST /Model': 'ModelController.create',
  'GET /Models': 'ModelController.getAll',
  'GET /Model/:id': 'ModelController.get',
  'PUT /Model/:id': 'ModelController.update',
  'DELETE /Model/': 'ModelController.destroy',
};

module.exports = Model;