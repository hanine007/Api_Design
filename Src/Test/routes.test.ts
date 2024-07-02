import app from '../server'
import supertest from 'supertest'
describe ('/GET',()=>{
    it('sHOULD SEND DATA',async()=>{
        const res=await supertest (app).get('/')
        expect (res.body.message) .toBe ('hello')
    })
})