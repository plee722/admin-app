const router = require('express').Router()
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('./inhome.db', (err) => {
    if (err) {
      throw new Error(err)
    }
})

const sql = 'SELECT * FROM items'

// get all items
router.get('/', (req, res, next) => {
    db.all(sql, (err, items) => {
        if (err) {
            next(err)
        } else {
            res.status(200).json({items})
        }
    })
})