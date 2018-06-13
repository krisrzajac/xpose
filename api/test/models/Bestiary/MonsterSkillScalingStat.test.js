const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MonsterSkillScalingStat = require('../../server/models/Bestiary/MonsterSkillScalingStat');

let monsterSkillScalingStat;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monsterSkillScalingStat = await MonsterSkillScalingStat.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MonsterSkillScalingStat is created correctly', async () => {
//   const sendMonsterSkillScalingStat = monsterSkillScalingStat.toJSON();
//   // check if monsterSkillScalingStat is created
//   expect(monsterSkillScalingStat.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonsterSkillScalingStat.password).toBeFalsy();

//   await monsterSkillScalingStat.destroy();
// });

// test('MonsterSkillScalingStat is updated correctly', async () => {
//   await monsterSkillScalingStat.update({
//     email: 'peter@mail.com',
//   });

//   expect(monsterSkillScalingStat.email).toBe('peter@mail.com');

//   await monsterSkillScalingStat.destroy();
// });