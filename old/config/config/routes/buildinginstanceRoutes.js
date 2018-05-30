const buildingInstance = {
  'POST /buildingInstance': 'buildingInstanceController.create',
  'GET /buildingInstances': 'buildingInstanceController.getAll',
  'GET /buildingInstance/:id': 'buildingInstanceController.get',
  'PUT /buildingInstance/:id': 'buildingInstanceController.update',
  'DELETE /buildingInstance/': 'buildingInstanceController.destroy',
};

module.exports = buildingInstance;