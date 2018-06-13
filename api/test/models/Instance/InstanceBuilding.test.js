const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const InstanceBuilding = require('../../server/models/Instance/InstanceBuilding');

let instanceBuilding;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  instanceBuilding = await InstanceBuilding.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('InstanceBuilding is created correctly', async () => {
//   const sendInstanceBuilding = instanceBuilding.toJSON();
//   // check if instanceBuilding is created
//   expect(instanceBuilding.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendInstanceBuilding.password).toBeFalsy();

//   await instanceBuilding.destroy();
// });

// test('InstanceBuilding is updated correctly', async () => {
//   await instanceBuilding.update({
//     email: 'peter@mail.com',
//   });

//   expect(instanceBuilding.email).toBe('peter@mail.com');

//   await instanceBuilding.destroy();
// });