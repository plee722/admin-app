import React, { Component } from "react";
import Confirmation from "./Confirmation";
import Form from "./Form";
import SingleOrderTable from "./SingleOrderTable";
import axios from "axios";
import { Link } from "react-router-dom";
import { items, itemIds } from "./utils";
import { PageHeader, Col, Box, VerticalRow, Button } from "../componentStyles";

class UpdateOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsNotInOrder: [],
      removedItems: [],
      orders: [],
      id: "",
      orderUpdated: {},
      deleted: false,
      checkboxes: items.reduce(
        (options, option) => ({
          ...options,
          [option]: false,
        }),
        {}
      ),
    };
  }

  handleChange = (event) => {
    const { name } = event.target;
    this.setState((oldState) => ({
      checkboxes: {
        ...oldState.checkboxes,
        [name]: !oldState.checkboxes[name],
      },
    }));
  };

  getOrderId = async (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    const res = await axios.get(`/api/orders/${this.state.id}`);
    const results = res.data;

    let filtered = [];
    let currOrder = this.getItemIds(results.orders);

    for (let itemName in itemIds) {
      if (!currOrder.includes(itemIds[itemName])) {
        filtered.push({ item_name: itemName, item_id: itemIds[itemName] });
      }
    }
    results.orders
      .concat(filtered)
      .forEach((order, i) => (order.rowId = i + 1));
    this.setState({
      orders: results.orders,
      itemsNotInOrder: filtered,
    });
  };

  deleteItem = async (rowId, itemId) => {
    await this.setState({
      orders: this.state.orders.filter((item) => item.rowId !== rowId),
      removedItems: [...this.state.removedItems, itemId],
    });
  };

  getItemIds = (arr) => {
    let ids = [];
    arr.forEach((obj) => {
      ids.push(obj.item_id);
    });
    return ids;
  };

  submitUpdate = async (event) => {
    event.preventDefault();
    console.log("hitting method");
    let orderItems = [];
    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        orderItems.push(itemIds[checkbox]);
      });
    let removed;
    if (this.state.removedItems.length > 0) {
      removed = this.state.removedItems;
    }
    console.log("this is state", this.state);
    let updates = { addItems: orderItems, removeItems: removed };
    const res = await axios.put(`/api/orders/${this.state.id}`, updates);
    this.setState({
      orderUpdated: res.data,
    });
  };

  submitDelete = async () => {
    await axios.delete(`/api/orders/${this.state.id}`);
    this.setState({
      orders: [],
      deleted: true,
    });
  };

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Box>
        <PageHeader>Update/Delete Order Form</PageHeader>
        <VerticalRow>
          <Col>Please enter Order ID into box below.</Col>
          <br></br>
          <Col>
            <Form
              type="Order"
              id={this.state.id}
              handleFormChange={this.handleFormChange}
            />
          </Col>
          <br></br>
          <Col>
            {this.state.orders.length ? (
              <SingleOrderTable
                orders={this.state.orders}
                itemsNotInOrder={this.state.itemsNotInOrder}
                handleChange={this.handleChange}
                deleteItem={this.deleteItem}
                addOrderItem={this.addOrderItem}
              />
            ) : (
              <Button type="submit" onClick={this.getOrderId}>
                Submit
              </Button>
            )}
          </Col>
          <Col>
            <p>
              Add items to the order using the check boxes and remove using the
              'X' Button.
            </p>
          </Col>
          <Col>
            <p>
              Please click submit to save updates or delete to remove order.
            </p>
          </Col>
          <Col>
            <Button onClick={(event) => this.submitUpdate(event)}>
              Submit Update
            </Button>
            <Button onClick={() => this.submitDelete()}>Delete Order</Button>
          </Col>
        </VerticalRow>

        {this.state.orderUpdated.id ? (
          <Link to="/orders">
            <Confirmation
              action="updated"
              orderId={this.state.orderUpdated.id}
            />
          </Link>
        ) : null}

        {this.state.deleted ? (
          <Link to="/orders">
            <Confirmation action="deleted" orderId={this.state.id} />
          </Link>
        ) : null}
      </Box>
    );
  }
}

export default UpdateOrders;
