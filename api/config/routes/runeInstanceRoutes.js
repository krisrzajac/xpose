const runeInstance = {
  'POST /runeInstance': 'runeInstanceController.create',
  'GET /runeInstances': 'runeInstanceController.getAll',
  'GET /runeInstance/:id': 'runeInstanceController.get',
  'PUT /runeInstance/:id': 'runeInstanceController.update',
  'DELETE /runeInstance/': 'runeInstanceController.destroy',
};

module.exports = runeInstance;