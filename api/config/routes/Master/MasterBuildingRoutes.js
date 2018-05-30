const masterBuilding = {
  'POST /masterBuilding': 'masterBuildingController.create',
  'GET /masterBuildings': 'masterBuildingController.getAll',
  'GET /masterBuilding/:id': 'masterBuildingController.get',
  'PUT /masterBuilding/:id': 'masterBuildingController.update',
  'DELETE /masterBuilding/': 'masterBuildingController.destroy',
};

module.exports = masterBuilding;