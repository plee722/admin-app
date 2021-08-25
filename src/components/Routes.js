import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Orders from "./Orders";
import AddOrder from "./AddOrder";
import UpdateOrder from "./UpdateOrder";
import Items from "./Items";
import NotFoundPage from "./NotFoundPage";

const Routes = () => {
  return (
    <div id="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/update" component={UpdateOrder} />
        <Route exact path="/add" component={AddOrder} />
        <Route exact path="/items" component={Items} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Routes;
