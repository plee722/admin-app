import React from "react";
import { Td } from "../componentStyles";

const OrderRow = ({ order }) => {
  return (
    <tr>
      <Td>{order.user_name}</Td>
      <Td>{order.user_id}</Td>
      <Td>{order.order_id}</Td>
      <Td>{order.items_ordered}</Td>
    </tr>
  );
};

export default OrderRow;
