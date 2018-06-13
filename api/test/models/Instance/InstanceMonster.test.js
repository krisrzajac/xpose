const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const InstanceMonster = require('../../server/models/Instance/InstanceMonster');

let instanceMonster;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  instanceMonster = await InstanceMonster.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('InstanceMonster is created correctly', async () => {
//   const sendInstanceMonster = instanceMonster.toJSON();
//   // check if instanceMonster is created
//   expect(instanceMonster.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendInstanceMonster.password).toBeFalsy();

//   await instanceMonster.destroy();
// });

// test('InstanceMonster is updated correctly', async () => {
//   await instanceMonster.update({
//     email: 'peter@mail.com',
//   });

//   expect(instanceMonster.email).toBe('peter@mail.com');

//   await instanceMonster.destroy();
// });