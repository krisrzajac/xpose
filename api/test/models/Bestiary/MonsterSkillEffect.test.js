const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MonsterSkillEffect = require('../../server/models/Bestiary/MonsterSkillEffect');

let monsterSkillEffect;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monsterSkillEffect = await MonsterSkillEffect.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MonsterSkillEffect is created correctly', async () => {
//   const sendMonsterSkillEffect = monsterSkillEffect.toJSON();
//   // check if monsterSkillEffect is created
//   expect(monsterSkillEffect.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonsterSkillEffect.password).toBeFalsy();

//   await monsterSkillEffect.destroy();
// });

// test('MonsterSkillEffect is updated correctly', async () => {
//   await monsterSkillEffect.update({
//     email: 'peter@mail.com',
//   });

//   expect(monsterSkillEffect.email).toBe('peter@mail.com');

//   await monsterSkillEffect.destroy();
// });