const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const Monster = require('../../server/models/Bestiary/Monster');

let monster;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monster = await Monster.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('Monster is created correctly', async () => {
//   const sendMonster = monster.toJSON();
//   // check if monster is created
//   expect(monster.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonster.password).toBeFalsy();

//   await monster.destroy();
// });

// test('Monster is updated correctly', async () => {
//   await monster.update({
//     email: 'peter@mail.com',
//   });

//   expect(monster.email).toBe('peter@mail.com');

//   await monster.destroy();
// });