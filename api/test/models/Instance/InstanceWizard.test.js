const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const InstanceWizard = require('../../server/models/Instance/InstanceWizard');

let instanceWizard;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  instanceWizard = await InstanceWizard.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('InstanceWizard is created correctly', async () => {
//   const sendInstanceWizard = instanceWizard.toJSON();
//   // check if instanceWizard is created
//   expect(instanceWizard.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendInstanceWizard.password).toBeFalsy();

//   await instanceWizard.destroy();
// });

// test('InstanceWizard is updated correctly', async () => {
//   await instanceWizard.update({
//     email: 'peter@mail.com',
//   });

//   expect(instanceWizard.email).toBe('peter@mail.com');

//   await instanceWizard.destroy();
// });