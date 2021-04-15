let supertest = require('supertest');
const { app, server } = require('../index');
const request = supertest(app);

describe('Login Test', () => {

    // before((done) => {
    //     app = router.createApp();
    //     done();
    // })

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

