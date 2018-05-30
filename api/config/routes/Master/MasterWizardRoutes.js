const masterWizard = {
  'POST /masterWizard': 'masterWizardController.create',
  'GET /masterWizards': 'masterWizardController.getAll',
  'GET /masterWizard/:id': 'masterWizardController.get',
  'PUT /masterWizard/:id': 'masterWizardController.update',
  'DELETE /masterWizard/': 'masterWizardController.destroy',
};

module.exports = masterWizard;