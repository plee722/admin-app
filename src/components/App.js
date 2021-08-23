import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import NavigationBar from "./Navbar";
import Users from "./Users";
import Orders from "./Orders";
import AddOrder from "./AddOrder";
import UpdateOrder from "./UpdateOrder";
import Items from "./Items";

function App() {
  return (
    <div id="container">
      <Route exact path="/" component={NavigationBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/update" component={UpdateOrder} />
      <Route exact path="/add" component={AddOrder} />
      <Route exact path="/items" component={Items} />
    </div>
  );
}

export default App;
