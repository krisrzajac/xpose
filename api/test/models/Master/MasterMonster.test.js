const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MasterMonster = require('../../server/models/Master/MasterMonster');

let masterMonster;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  masterMonster = await MasterMonster.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MasterMonster is created correctly', async () => {
//   const sendMasterMonster = masterMonster.toJSON();
//   // check if masterMonster is created
//   expect(masterMonster.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMasterMonster.password).toBeFalsy();

//   await masterMonster.destroy();
// });

// test('MasterMonster is updated correctly', async () => {
//   await masterMonster.update({
//     email: 'peter@mail.com',
//   });

//   expect(masterMonster.email).toBe('peter@mail.com');

//   await masterMonster.destroy();
// });