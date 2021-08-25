// const { expect } = require('chai')
// const request = require('supertest')
// const sqlite3 = require('sqlite3')
// const app = require('../server/index')

// const db = new sqlite3.Database('./inhome.db', (err) => {
//     if (err) {
//       throw new Error(err)
//     }
// })

// describe('Item routes', () => {
//     describe('/api/items', () => {
//         beforeEach(() => {
//             return db.run("INSERT INTO items (name) VALUES ('Candy')")
//         })

//         it('GET /api/items', async () => {
//             const res = await request(app)
//                 .get('/api/items')
//                 .expect(200)
//             expect(res.body).to.be.an('array')
//             expect(res.body[0].name).to.be.equal('Candy')
//         })
//     })
// })
