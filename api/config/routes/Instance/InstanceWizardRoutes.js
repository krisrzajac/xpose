const instanceWizard = {
  'POST /instanceWizard': 'instanceWizardController.create',
  'GET /instanceWizards': 'instanceWizardController.getAll',
  'GET /instanceWizard/:id': 'instanceWizardController.get',
  'PUT /instanceWizard/:id': 'instanceWizardController.update',
  'DELETE /instanceWizard/': 'instanceWizardController.destroy',
};

module.exports = instanceWizard;
