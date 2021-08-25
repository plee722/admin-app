# Walmart Inhome

# MVP
* A web application that allows a user to view and update information pulled from a SQL database
* A React UI allowing the user to view, create and update orders
* A backend enabling communication between the front-end and the provided database
* A clean usable interface that a first-time user should be able to use and find any required information


## Future features to add
* Add/delete functionality for items and users
* Analytics in some form (may need additional data points in tables like timestamp)
* Add item quantities (# of items purchased, # of items in stock)
* Unit tests - WIP
* Implement and store random avatar for each user
* CSS animations
* Search functionality (would be useful with higher volumes of data)
* Warning prompts for invalid submissions


# Getting Started
1. To run seed file, run `npm run seed`
2. To app running locally, install dependencies with `npm install` and start app with `npm run start`

* If you are creating the database manually, use the schema below:

**Users**
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL
);
**Orders**
CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
)
**Order Items**
CREATE TABLE order_items (
  order_id INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (item_id) REFERENCES items(id),
  PRIMARY KEY (order_id, item_id)
)
**Items**
CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL
)

Tools used
* axios - promise based HTTP client for node.js and the browser (preferred over .fetch due to automatic JSON transformation)
* colorlib-404 - template for 404 page component
* cors - set of headers that allow the browser and server to communicate about which requests are (and are not) allowed
* create-react-app - integrated toolchain for React (includes several packages under the hood including webpack and babel)
* express - library for handling route requests and setting up node.js server
* @emotion/styled - library to create styled React components
* nodemon - monitors source code and automatically reflects changes in server
* path - access and interact with file system
* prettier - code formatter
* react-router-dom - library for routing in React
* sqlite3 - SQL database engine


# App Organization
- Frontend
  - The src directory contains all of the React components, index.js where the virtual DOM is rendered, and the overall App component.
- Backend
  - The server directory contains all of the API routes for users, orders, and items in addition to index.js where the express server is initialized. 
- Assets
  - The public directory contains static files like images along with bundled webpack file. This occurs under the hood due to Create React App.


# User Walkthrough
* A customer representative visits the website homepage and can navigate to several different pages:
  - Home
  - Users - view all users and ids
  - Items - view all items and ids
  - Orders - view all orders by user with items purchased 
  - Analytics - leads to 404 page
  - Add Order - add new order
  - Edit Order - modify or delete existing order
* To view data, they can click the icons on the dashboard or the links in the navigation bar to the Users, Items, and Orders pages. 
* To add a new order, they can navigate to the "Add Order" page via the navigation bar. Once on the page, they should enter a valid user ID, which can be verified on the Users page. They can then select all desired items for the order. Lastly, they can submit the order. A message confirming the order submission will appear. This message links back to the Orders page to verify the new order.
* To update a new order, they can navigate to the "Edit Order" page via the navigation bar. Once on the page, they should enter a valid order ID, which can be verified on the Orders page. They can then remove and/or select all desired items for the existing order. After making the updates, they can submit the update. A message confirming the order change will appear. This message links back to the Orders page to verify the changes.
* If they try to navigate to a page that doesn't exist (like the Analytics page or http://localhost:3000/random), they will be directed to the 404 not found page.