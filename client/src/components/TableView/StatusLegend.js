// components/TableView/StatusLegend.js
import React from "react";

const StatusLegend = () => (
  <div className="status-legend">
    <span className="legend">
      <span className="dot grey"></span>Blank
    </span>
    <span className="legend">
      <span className="dot blue"></span> order
    </span>
    <span className="legend">
      <span className="dot green"></span>Order placed
    </span>
    <span className="legend">
      <span className="dot yellow"></span>Paid
    </span>
  </div>
);

export default StatusLegend;
