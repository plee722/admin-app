const router = require("express").Router();
const db = require("../../../seed");

const sql = "SELECT * FROM items ORDER BY id ASC";

// get all items
router.get("/", (req, res, next) => {
  db.all(sql, (err, items) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ items });
    }
  });
});

module.exports = router;
