import React from "react";
import Checkbox from "./Checkbox";

const SingleOrderRow = ({ rows, deleteItem, handleChange }) => {
  return (
    <tr>
      <td>{rows.rowId}</td>
      <td>{rows.order_id}</td>
      <td>{rows.item_id}</td>
      <td>{rows.item_name}</td>
      <td>
        {rows.order_id ? (
          <button onClick={() => deleteItem(rows.rowId, rows.item_id)}>
            X
          </button>
        ) : null}
      </td>
      <td>
        {rows.order_id ? null : (
          <Checkbox label={rows.item_name} onCheckboxChange={handleChange} />
        )}
      </td>
    </tr>
  );
};

export default SingleOrderRow;
