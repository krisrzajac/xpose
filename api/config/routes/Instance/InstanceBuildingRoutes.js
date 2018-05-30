const instanceBuilding = {
  'POST /instanceBuilding': 'instanceBuildingController.create',
  'GET /instanceBuildings': 'instanceBuildingController.getAll',
  'GET /instanceBuilding/:id': 'instanceBuildingController.get',
  'PUT /instanceBuilding/:id': 'instanceBuildingController.update',
  'DELETE /instanceBuilding/': 'instanceBuildingController.destroy',
};

module.exports = instanceBuilding;