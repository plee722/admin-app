// const { expect } = require('chai')
// const request = require('supertest')
// const sqlite3 = require('sqlite3')
// const app = require('../server/index')

// const db = new sqlite3.Database('./data.db', (err) => {
//     if (err) {
//       throw new Error(err)
//     }
// })

// describe('User routes', () => {
//     describe('/api/users', () => {
//         beforeEach(() => {
//             return db.run("INSERT INTO users (name) VALUES ('Bob')")
//         })

//         it('responds with json', async (done) => {
//             await request(app)
//                 .get('/users')
//                 .set('Accept', 'application/json')
//                 .expect('Content-Type', /json/)
//                 .expect(200, done)

//         })

//         it('GET /api/users', async () => {
//             const res = await request(app)
//                 .get('/users')
//                 .expect(200)
//             expect(res.body).to.be.an('object')
//             expect(res.body.name).to.be.equal("Bob")
//         })
//     })
// })
