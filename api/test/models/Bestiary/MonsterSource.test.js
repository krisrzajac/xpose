const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MonsterSource = require('../../server/models/Bestiary/MonsterSource');

let monsterSource;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monsterSource = await MonsterSource.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MonsterSource is created correctly', async () => {
//   const sendMonsterSource = monsterSource.toJSON();
//   // check if monsterSource is created
//   expect(monsterSource.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonsterSource.password).toBeFalsy();

//   await monsterSource.destroy();
// });

// test('MonsterSource is updated correctly', async () => {
//   await monsterSource.update({
//     email: 'peter@mail.com',
//   });

//   expect(monsterSource.email).toBe('peter@mail.com');

//   await monsterSource.destroy();
// });