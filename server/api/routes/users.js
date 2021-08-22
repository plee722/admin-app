const router = require('express').Router()
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('./inhome.db', (err) => {
    if (err) {
      throw new Error(err)
    }
})

const sqlMap = {
    users: 'SELECT * FROM users',
    usersAndOrders: 'SELECT u.name as user_name, u.id as user_id, o.id as order_id, group_concat(i.name) as items_ordered FROM orders as o JOIN users as u ON u.id = o.user_id JOIN order_items as oi on oi.order_id = o.id JOIN items as i on oi.item_id=i.id GROUP BY order_id ORDER BY user_id ASC'
}

// get all users
router.get('/', (req, res, next) => {
    db.all(sqlMap.users, (err, users) => {
        if (err) {
            next(err)
        } else {
            res.status(200).json({users})
        }
    })
})

// get all users and their orders with items listed
router.get('/orders', (req, res, next) => {
    db.all(sqlMap.usersAndOrders, (err, orders) => {
        if (err) {
            next(err)
        } else {
            res.status(200).json({orders})
        }
    }
}

module.exports =router