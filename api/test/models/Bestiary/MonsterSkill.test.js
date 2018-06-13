const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MonsterSkill = require('../../server/models/Bestiary/MonsterSkill');

let monsterSkill;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monsterSkill = await MonsterSkill.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MonsterSkill is created correctly', async () => {
//   const sendMonsterSkill = monsterSkill.toJSON();
//   // check if monsterSkill is created
//   expect(monsterSkill.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonsterSkill.password).toBeFalsy();

//   await monsterSkill.destroy();
// });

// test('MonsterSkill is updated correctly', async () => {
//   await monsterSkill.update({
//     email: 'peter@mail.com',
//   });

//   expect(monsterSkill.email).toBe('peter@mail.com');

//   await monsterSkill.destroy();
// });