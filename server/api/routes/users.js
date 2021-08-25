const router = require("express").Router();
const db = require("../../../seed");

const sqlMap = {
  allUsers: "SELECT * FROM users",
  allUsersAndOrders:
    "SELECT u.name as user_name, u.id as user_id, o.id as order_id, group_concat(i.name, ', ') as items_ordered FROM orders as o JOIN users as u ON u.id = o.user_id JOIN order_items as oi on oi.order_id = o.id JOIN items as i on oi.item_id=i.id GROUP BY order_id ORDER BY order_id ASC",
};

// get all users
router.get("/", (req, res, next) => {
  db.all(sqlMap.allUsers, (err, users) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ users });
    }
  });
});

// get all users and their orders with items listed
router.get("/orders", (req, res, next) => {
  db.all(sqlMap.allUsersAndOrders, (err, orders) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ orders });
    }
  });
});

// [WIP] get random avatar image
// router.get('/avatar', async (req, res, next) => {
//     try {
//     const call = await axios({
//         method: 'get',
//         url: "https://joeschmoe.io/api/v1/random"})
//     res.json({ call })
//     } catch (err) {
//         next(err)
//     }
// })

module.exports = router;
