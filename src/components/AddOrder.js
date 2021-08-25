import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Form from "./Form";
import axios from "axios";
import Confirmation from "./Confirmation";
import { Link } from "react-router-dom";
import { items, itemIds } from './utils'
import { PageHeader, Col, Box, VerticalRow, Button } from '../componentStyles'

class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderAdded: {},
      id: "",
      checkboxes: items.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(oldState => ({
        checkboxes: {
          ...oldState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleChange = event => {
    const { name } = event.target;
    this.setState(oldState => ({
      checkboxes: {
        ...oldState.checkboxes,
        [name]: !oldState.checkboxes[name]
      }
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    let orderItems = [];
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        orderItems.push(itemIds[checkbox]);
      });
    const info = { items: orderItems, userID: this.state.id };
    console.log('right before axios request', info)
    let res = await axios.post("/api/orders", info);
    this.setState({
      id: "",
      orderAdded: res.data
    });
    this.deselectAll();
  };

  addCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleChange}
      key={option}
    />
  );

  addCheckboxes = () => items.map(this.addCheckbox);

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Box>
          <PageHeader>Add Order Form</PageHeader>
          <form onSubmit={this.handleSubmit}>
          <VerticalRow>
            <Col>To add order, please enter order ID, select items, and submit order.</Col>
            <br></br>
            <Col><Form
              type="User"
              id={this.state.id}
              handleFormChange={this.handleFormChange}
            />
            </Col>
            <Col>
              <p>Select Items</p>
            </Col>
            <Col>
            {this.addCheckboxes()}
            </Col>
              <Col>
              <p>Submit Order</p>
              </Col>
              <Col>
              <Button
                type="submit"
                disabled={!this.state.id}
              >
                <p>Submit</p>
              </Button>
              </Col>
              </ VerticalRow>
          </form>
        
          {this.state.orderAdded.id ? (
            <Link to="/orders">
              <Confirmation
                action="added"
                orderId={this.state.orderAdded.id}
              />
            </Link>
          ) : null}
        </Box>
    );
  }
}

export default AddOrder;
