const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MasterRune = require('../../server/models/Master/MasterRune');

let masterRune;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  masterRune = await MasterRune.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MasterRune is created correctly', async () => {
//   const sendMasterRune = masterRune.toJSON();
//   // check if masterRune is created
//   expect(masterRune.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMasterRune.password).toBeFalsy();

//   await masterRune.destroy();
// });

// test('MasterRune is updated correctly', async () => {
//   await masterRune.update({
//     email: 'peter@mail.com',
//   });

//   expect(masterRune.email).toBe('peter@mail.com');

//   await masterRune.destroy();
// });