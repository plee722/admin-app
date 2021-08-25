import React from "react";

const Confirmation = ({ action, orderId }) => (
  <div>
    <p>
      Order number {orderId} has been {action}.
    </p>
    <p>Go Back To Orders to See Changes</p>
  </div>
);
export default Confirmation;
