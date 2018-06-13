const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MonsterLeaderSkill = require('../../server/models/Bestiary/MonsterLeaderSkill');

let monsterLeaderSkill;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monsterLeaderSkill = await MonsterLeaderSkill.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MonsterLeaderSkill is created correctly', async () => {
//   const sendMonsterLeaderSkill = monsterLeaderSkill.toJSON();
//   // check if monsterLeaderSkill is created
//   expect(monsterLeaderSkill.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonsterLeaderSkill.password).toBeFalsy();

//   await monsterLeaderSkill.destroy();
// });

// test('MonsterLeaderSkill is updated correctly', async () => {
//   await monsterLeaderSkill.update({
//     email: 'peter@mail.com',
//   });

//   expect(monsterLeaderSkill.email).toBe('peter@mail.com');

//   await monsterLeaderSkill.destroy();
// });