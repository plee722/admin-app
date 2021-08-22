const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./inhome.db', (err) => {
    if (err) {
      throw new Error(err)
    }
  })

function checkForTables() {
    db.serialize(() => {
        // Check for orders table and add if missing
      db.run('DROP TABLE IF EXISTS orders');
      db.run('CREATE TABLE IF NOT EXISTS `orders` ( ' +
                     '`id` INTEGER NOT NULL, ' +
                     '`user_id` INTEGER NOT NULL, ' +
                     'PRIMARY KEY(`id`), ' +
                     'FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) )');

        // Check for order_items table and add if missing
      db.run('DROP TABLE IF EXISTS order_items');
      db.run('CREATE TABLE IF NOT EXISTS `order_items` ( ' +
                      '`order_id` INTEGER NOT NULL, ' +
                      '`item_id` INTEGER NOT NULL, ' +
                      'FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`), ' +
                      'FOREIGN KEY(`item_id`) REFERENCES `items`(`id`), ' +
                      'PRIMARY KEY(`order_id`, `item_id`) )');
    });
}

checkForTables()

// Inserting dummy data into orders and order_items tables
db.get("SELECT name FROM sqlite_schema WHERE type='table' AND name='orders'", (err, table) => {
    if (err) {
      throw new Error(err);
    }
  
    if (table) {
      db.serialize(() => {
        let orderID;
        db.run("INSERT INTO orders (user_id) VALUES (1)", function(err) {
          if (err) {
            throw new Error(err);
          }
          orderID = this.lastID;
        });
  
        db.get("SELECT name FROM sqlite_schema WHERE type='table' AND name='order_items'", (err, table) => {
          if (err) {
            throw new Error(err);
          }
          if (table) {
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (5, ${orderID})`);
          }
        });
  
        db.run("INSERT INTO orders (user_id) VALUES (5)", function(err) {
          if (err) {
            throw new Error(err);
          }
          orderID = this.lastID;
        });
  
        db.get("SELECT name FROM sqlite_schema WHERE type='table' AND name='order_items'", (err, table) => {
          if (err) {
            throw new Error(err);
          }
          if (table) {
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (1, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (3, ${orderID})`);
          }
        });
  
        db.run("INSERT INTO orders (user_id) VALUES (2)", function(error) {
          if (err) {
            throw new Error(err);
          }
          orderID = this.lastID;
        });
  
        db.get("SELECT name FROM sqlite_schema WHERE type='table' AND name='order_items'", (err, table) => {
          if (err) {
            throw new Error(err);
          }
          if (table) {
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (3, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (7, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (9, ${orderID})`);
          }
        });
  
        db.run("INSERT INTO orders (user_id) VALUES (3)", function(err) {
          if (err) {
            throw new Error(err);
          }
          orderID = this.lastID;
        });
  
        db.get("SELECT name FROM sqlite_schema WHERE type='table' AND name='order_items'", (err, table) => {
          if (err) {
            throw new Error(err);
          }
          if (table) {
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (4, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (10, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (9, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (6, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (2, ${orderID})`);
          }
        });
  
        db.run("INSERT INTO orders (user_id) VALUES (4)", function(err) {
          if (err) {
            throw new Error(err);
          }
          orderID = this.lastID;
        });
  
        db.get("SELECT name FROM sqlite_schema WHERE type='table' AND name='order_items'", (err, table) => {
          if (err) {
            throw new Error(err);
          }
          if (table) {
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (2, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (4, ${orderID})`);
          }
        });
  
        db.run("INSERT INTO orders (user_id) VALUES (2)", function(err) {
          if (err) {
            throw new Error(err);
          }
          orderID = this.lastID;
        });
  
        db.get("SELECT name FROM sqlite_schema WHERE type='table' AND name='order_items'", (err, table) => {
          if (err) {
            throw new Error(err);
          }
          if (table) {
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (2, ${orderID})`);
            db.run(`INSERT INTO order_items (item_id, order_id) VALUES (8, ${orderID})`);
          }
        });
  
      });
    }
})

