const req = require('supertest');
const { getAccessToken } = require('../utils/request');
const API_URL = process.env.API_URL


describe('Users', () => {
    it('(E2E) should list users', async ()=>{
        let token = await getAccessToken()
        await req(API_URL)
        .get('/users')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .then(response=>{
            expect(response.statusCode).toEqual(200)
            expect(response.body).toBeInstanceOf(Array)
        })
    })
})