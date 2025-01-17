const app = require('../../src/app');
const request = require('supertest');
const connection = require('../../src/database');

describe('ONG', () => {
  beforeEach(async ()=> {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async ()=> {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'ONG test',
      email: 'teste@teste.com',
      whatsapp: '85000000000',
      city: 'Fortaleza',
      uf: 'CE',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
  
})
