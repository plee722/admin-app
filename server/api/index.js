const router = require("express").Router();

// Organizes routes into central spot
router.use("/users", require("./routes/users"));
router.use("/items", require("./routes/items"));
router.use("/orders", require("./routes/orders"));

module.exports = router;
