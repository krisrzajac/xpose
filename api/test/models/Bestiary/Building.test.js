const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const Building = require('../../server/models/Bestiary/Building');

let building;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  building = await Building.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('Building is created correctly', async () => {
//   const sendBuilding = building.toJSON();
//   // check if building is created
//   expect(building.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendBuilding.password).toBeFalsy();

//   await building.destroy();
// });

// test('Building is updated correctly', async () => {
//   await building.update({
//     email: 'peter@mail.com',
//   });

//   expect(building.email).toBe('peter@mail.com');

//   await building.destroy();
// });