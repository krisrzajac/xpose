const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MonsterTag = require('../../server/models/Bestiary/MonsterTag');

let monsterTag;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monsterTag = await MonsterTag.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MonsterTag is created correctly', async () => {
//   const sendMonsterTag = monsterTag.toJSON();
//   // check if monsterTag is created
//   expect(monsterTag.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonsterTag.password).toBeFalsy();

//   await monsterTag.destroy();
// });

// test('MonsterTag is updated correctly', async () => {
//   await monsterTag.update({
//     email: 'peter@mail.com',
//   });

//   expect(monsterTag.email).toBe('peter@mail.com');

//   await monsterTag.destroy();
// });