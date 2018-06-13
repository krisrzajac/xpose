const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const HomonculusSkill = require('../../server/models/Bestiary/HomonculusSkill');

let homonculusSkill;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  homonculusSkill = await HomonculusSkill.build({
    // email: 'martin@mail.com',
    // password: 'securepassword',
  }).save();
});

// test('HomonculusSkill is created correctly', async () => {
//   const sendHomonculusSkill = homonculusSkill.toJSON();
//   // check if homonculusSkill is created
//   expect(homonculusSkill.email).toBe('martin@mail.com');
//   // check if password is not send to browser
//   expect(sendHomonculusSkill.password).toBeFalsy();

//   await homonculusSkill.destroy();
// });

// test('HomonculusSkill is updated correctly', async () => {
//   await homonculusSkill.update({
//     email: 'peter@mail.com',
//   });

//   expect(homonculusSkill.email).toBe('peter@mail.com');

//   await homonculusSkill.destroy();
// });