import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Table, Button} from 'reactstrap'
import axios from 'axios';
// import { ModalContainer } from '../unused/ModalContainer'
// import { items, itemIds } from './utils'

const Orders = (props) => {
    const [data, setData] = useState({ orders: []})
    try {
        useEffect(() => {
            const fetchData = async () => {
              const res = await axios("/api/users/orders");
              setData(res.data);
            };
            fetchData();
          }, []);
    } catch (err) {
        console.error("Unable to fetch all orders", err);
    }

    // selectAllCheckboxes = isSelected => {
    //     Object.keys(this.state.checkboxes).forEach(checkbox => {
    //       this.setState(prevState => ({
    //         checkboxes: {
    //           ...prevState.checkboxes,
    //           [checkbox]: isSelected
    //         }
    //       }));
    //     });
    //   };
    
    //   selectAll = () => this.selectAllCheckboxes(true);
    
    //   deselectAll = () => this.selectAllCheckboxes(false);

    //   handleChange = event => {
    //     const { name } = event.target;
    //     this.setState(prevState => ({
    //       checkboxes: {
    //         ...prevState.checkboxes,
    //         [name]: !prevState.checkboxes[name]
    //       }
    //     }));
    //   };    

    // onAdd = async (event) => {
    //     event.preventDefault();
    // let ordered = [];
    // Object.keys(this.state.checkboxes)
    //   .filter(checkbox => this.state.checkboxes[checkbox])
    //   .forEach(checkbox => {
    //     ordered.push(itemIds[checkbox]);
    //   });
    // const info = { items: ordered, userid: this.state.id };
    // let res = await axios.post("/api/orders", info);
    // this.setState({
    //   id: "",
    //   orderCreated: res.data
    // });
    // this.deselectAll();
    // }

    // onUpdate = async (event) => {
    //     event.preventDefault();
    //     let ordered = []
    //     Object.keys(this.state.checkboxes)
    //     .filter(checkbox => this.state.checkboxes[checkbox])
    //     .forEach(checkbox => {
    //       ordered.push(itemID[checkbox]);
    //     });

    //   let newlyRemoved;
    //   if (this.state.removed.length > 0) {
    //     newlyRemoved = this.state.removed;
    //   }
    //   let updates = { add: orderitems, remove: newlyRemoved };
    //   const res = await axios.put(`/api/orders/${this.state.id}`, updates);
    //   this.setState({
    //     orderupdated: res.data
    //   });
    // };


    // render() {
    //     return (
    //         <div className="container">
    //             <div>
    //                 <h1>Orders History</h1>
    //                 <p>To update order, please submit order ID</p>
    //                 <form>
    //                     <label htmlFor="order_id">Enter order ID</label>
    //                     <input type="text" name="order_id" value={this.state.id} handleFormChange={this.handleFormChange}></input>
    //                 </form>
    //             </div>
    //         </div>
    //     )

    return (
        <div id="container">
            <h1>Orders History</h1>
            <Table>
                <tbody>
                    <tr>
                        <th>Buyer Name</th>
                        <th>Buyer ID</th>
                        <th>Order ID</th>
                        <th>Items Purchased</th>
                    </tr>
                    {data.orders.map((order) => (
                        <tr>
                            <td>{order.user_name}</td>
                            <td>{order.user_id}</td>
                            <td>{order.order_id}</td>
                            <td>{order.items_ordered}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link to="/">
            <Button color="primary">Return to Homepage</Button>
            </Link>
            {/* <ModalContainer triggerText="Add Order" isAdd />
            <ModalContainer triggerText="Update Order" /> */}
        </div>
    )
}

export default Orders