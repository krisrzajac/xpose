const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const MonsterSkillEffectDetail = require('../../server/models/Bestiary/MonsterSkillEffectDetail');

let monsterSkillEffectDetail;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  monsterSkillEffectDetail = await MonsterSkillEffectDetail.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('MonsterSkillEffectDetail is created correctly', async () => {
//   const sendMonsterSkillEffectDetail = monsterSkillEffectDetail.toJSON();
//   // check if monsterSkillEffectDetail is created
//   expect(monsterSkillEffectDetail.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendMonsterSkillEffectDetail.password).toBeFalsy();

//   await monsterSkillEffectDetail.destroy();
// });

// test('MonsterSkillEffectDetail is updated correctly', async () => {
//   await monsterSkillEffectDetail.update({
//     email: 'peter@mail.com',
//   });

//   expect(monsterSkillEffectDetail.email).toBe('peter@mail.com');

//   await monsterSkillEffectDetail.destroy();
// });