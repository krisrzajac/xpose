const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const InstanceBattle = require('../../server/models/Instance/InstanceBattle');

let instanceBattle;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  instanceBattle = await InstanceBattle.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('InstanceBattle is created correctly', async () => {
//   const sendInstanceBattle = instanceBattle.toJSON();
//   // check if instanceBattle is created
//   expect(instanceBattle.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendInstanceBattle.password).toBeFalsy();

//   await instanceBattle.destroy();
// });

// test('InstanceBattle is updated correctly', async () => {
//   await instanceBattle.update({
//     email: 'peter@mail.com',
//   });

//   expect(instanceBattle.email).toBe('peter@mail.com');

//   await instanceBattle.destroy();
// });