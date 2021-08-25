import React from "react";
import SingleOrderRow from "./SingleOrderRow";

const SingleOrderTable = ({ orders, deleteItem, itemsNotInOrder, handleChange})=> {
  let combined = orders.concat(itemsNotInOrder);
  
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Row No.</th>
              <th>Order ID</th>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Delete Item</th>
              <th>Add Item</th>
            </tr>
            {combined.map((eaOrder, i) => (
              <SingleOrderRow
                handleChange={handleChange}
                key={i}
                rows={eaOrder}
                deleteItem={deleteItem}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
};

export default SingleOrderTable;
