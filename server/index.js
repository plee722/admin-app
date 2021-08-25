const cors = require("cors");
const express = require("express");
const path = require("path");
const PORT = 8080;

const app = express();

// body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS handling package
app.use(cors());

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// api routes
app.use("/api", require("./api"));

// Send index.html for any non-API GET requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Send 404 for any remaining requests
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

app.listen(PORT, () => {
  console.log(`
  Listening on port ${PORT}
  http://localhost:${PORT}/
`);
});

module.exports = app;
