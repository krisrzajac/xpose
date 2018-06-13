const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const InstanceRune = require('../../server/models/Instance/InstanceRune');

let instanceRune;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  instanceRune = await InstanceRune.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('InstanceRune is created correctly', async () => {
//   const sendInstanceRune = instanceRune.toJSON();
//   // check if instanceRune is created
//   expect(instanceRune.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendInstanceRune.password).toBeFalsy();

//   await instanceRune.destroy();
// });

// test('InstanceRune is updated correctly', async () => {
//   await instanceRune.update({
//     email: 'peter@mail.com',
//   });

//   expect(instanceRune.email).toBe('peter@mail.com');

//   await instanceRune.destroy();
// });