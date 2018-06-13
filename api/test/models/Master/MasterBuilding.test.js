const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MasterBuilding = require('../../server/models/Master/MasterBuilding');

let masterBuilding;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  masterBuilding = await MasterBuilding.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MasterBuilding is created correctly', async () => {
//   const sendMasterBuilding = masterBuilding.toJSON();
//   // check if masterBuilding is created
//   expect(masterBuilding.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMasterBuilding.password).toBeFalsy();

//   await masterBuilding.destroy();
// });

// test('MasterBuilding is updated correctly', async () => {
//   await masterBuilding.update({
//     email: 'peter@mail.com',
//   });

//   expect(masterBuilding.email).toBe('peter@mail.com');

//   await masterBuilding.destroy();
// });