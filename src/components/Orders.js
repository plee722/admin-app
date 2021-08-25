import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageHeader, Box, Table, Th } from '../componentStyles';
import OrderRow from './OrderRow'

const Orders = () => {
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

    return (
        <Box>
            <PageHeader>Orders History</PageHeader>
            <Table>
                <tbody>
                    <tr>
                        <Th>Buyer Name</Th>
                        <Th>Buyer ID</Th>
                        <Th>Order ID</Th>
                        <Th>Items Purchased</Th>
                    </tr>
                    {data.orders.map((order) => (
                        <OrderRow order={order} />
                    ))}
                </tbody>
            </Table>
        </Box>
    )
}

export default Orders