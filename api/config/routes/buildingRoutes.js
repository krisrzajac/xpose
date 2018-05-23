const building = {
  'POST /building': 'buildingController.create',
  'GET /buildings': 'buildingController.getAll',
  'GET /building/:id': 'buildingController.get',
  'PUT /building/:id': 'buildingController.update',
  'DELETE /building/': 'buildingController.destroy',
};

module.exports = building;