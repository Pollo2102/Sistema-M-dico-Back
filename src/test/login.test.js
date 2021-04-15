const { JsonWebTokenError } = require('jsonwebtoken');
let supertest = require('supertest');
const { app, server } = require('../index');
const request = supertest(app);

afterEach(async () => {
    await server.close();
})

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe('Login Test', () => {

    jest.setTimeout(15000);

    it('should return 200', async done => {
        const response = await request
        .post('/users/authenticate')
        .set('Content-Type', 'application/json')
        .send({ id: '', email: 'valenv.dg@gmail.com', password: 'hola123', fullname: 'Diego V' });
        expect(response.status).toBe(200);
        server.close();
        done();
    })
})

