const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MasterWizard = require('../../server/models/Master/Master/MasterWizard');

let masterWizard;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  masterWizard = await MasterWizard.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MasterWizard is created correctly', async () => {
//   const sendMasterWizard = masterWizard.toJSON();
//   // check if masterWizard is created
//   expect(masterWizard.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMasterWizard.password).toBeFalsy();

//   await masterWizard.destroy();
// });

// test('MasterWizard is updated correctly', async () => {
//   await masterWizard.update({
//     email: 'peter@mail.com',
//   });

//   expect(masterWizard.email).toBe('peter@mail.com');

//   await masterWizard.destroy();
// });