const request = require('supertest');
const testArenaBattleData = require('../../server/BattleArenaStart');
const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const UploadController = require('../../server/models/UploadController');

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test('UploadController | create', async () => {
  const res = await request(api)
    .post('/upload')
    .set('Accept', /json/)
    .send(testArenaBattleData)
    .expect(200);

  expect(res.body.battle).toBeTruthy();
});

