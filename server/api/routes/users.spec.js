const { expect } = require('chai')
const request = require('supertest')
const sqlite3 = require('sqlite3')
const app = require('../../index')

const db = new sqlite3.Database('./inhome.db', (err) => {
    if (err) {
      throw new Error(err)
    }
})

describe('User routes', () => {
    describe('/api/users', () => {
        beforeEach(() => {
            return db.run("INSERT INTO users (name) VALUES ('Bob')"
        })

        it('GET /api/users', async () => {
            const res = await request(app)
                .get('/api/users')
                .expect(200)
            expect(res.body).to.be.an('array')
            expect(res.body[0].name).to.be.equal("Bob")
        })
    })
})