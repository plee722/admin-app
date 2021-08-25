const router = require("express").Router();
const db = require("../../../seed");
const util = require("util");

const sqlMap = {
  allOrders:
    "SELECT oi.order_id AS order_id, i.id AS item_id, i.name AS item_name FROM order_items oi JOIN items i ON i.id = oi.item_id",
  orderByID:
    "SELECT oi.order_id AS order_id, i.id AS item_id, i.name AS item_name FROM items i JOIN order_items oi ON i.id = oi.item_id WHERE order_id = $orderID",
  deleteOrder: "DELETE FROM orders WHERE orders.id = $orderID",
  addOrder: `INSERT INTO orders (user_id) VALUES ($userId)`,
  addOrderItems: "INSERT INTO order_items (order_id, item_id) VALUES ",
};

// get all orders, not in use
router.get("/", (req, res, next) => {
  db.all(sqlMap.allOrders, (err, orders) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ orders });
    }
  });
});

// get order by ID
router.get("/:orderID", (req, res, next) => {
  const orderID = req.params.orderID;
  db.all(sqlMap.orderByID, { $orderID: orderID }, (err, orders) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ orders });
    }
  });
});

// add new order
router.post("/", async (req, res, next) => {
  let error;
  const userID = req.body.userID;
  const items = req.body.items;

  const userIdSql = `SELECT users.id FROM users WHERE users.id = ${userID}`;
  // This converts the sqlite3 function into a promise format
  db.get = util.promisify(db.get);
  let queriedRow = await db.get(userIdSql);

  if (!queriedRow) {
    error = "This user does not exist";
    res.status(400).json({ error: error });
    return;
  } else if (items.length === 0) {
    error = "Missing items from order";
    res.status(400).json({ error: error });
    return;
  }

  db.run(sqlMap.addOrder, { $userId: queriedRow.id }, function (err) {
    if (err) {
      next(err);
    } else {
      let orderId = this.lastID;
      let orderItemIds = items
        .map((itemId) => `(${orderId},${itemId})`)
        .join(", ");
      let orderItemSql =
        "INSERT INTO order_items (order_id, item_id) VALUES " + orderItemIds;

      db.run(orderItemSql, function (err, result) {
        if (err) {
          return console.error(err.message);
        }

        res.status(201).json({ id: orderId });
      });
    }
  });
});

// add and remove multiple items from an order
router.put("/:orderID", (req, res, next) => {
  const addItems = req.body.addItems;
  const removeItems = req.body.removeItems;
  const orderID = req.params.orderID;

  if (Array.isArray(addItems) && addItems.length > 0) {
    const orderItemIds = addItems
      .map((itemId) => `(${orderID},${itemId})`)
      .join(", ");
    let addSql =
      "INSERT INTO order_items (order_id, item_id) VALUES " + orderItemIds;
    db.run(addSql, (err) => {
      if (err) {
        return console.error(err.message);
      }
    });
  }

  if (Array.isArray(removeItems) && removeItems.length > 0) {
    removeItems.forEach((itemId) => {
      let removeSql = `DELETE FROM order_items WHERE order_id = ${orderID} AND item_id = ${itemId}`;
      db.run(removeSql, (err) => {
        if (err) {
          return console.error(err.message);
        }
      });
    });
  }
  res.status(201).json({ id: orderID });
});

// delete an order by ID
router.delete("/:orderID", (req, res, next) => {
  const orderID = req.params.orderID;
  db.run(sqlMap.deleteOrder, { $orderID: orderID }, (err) => {
    if (err) {
      next(err);
    } else {
      res.status(204).json({ id: orderID });
    }
  });
});

module.exports = router;
