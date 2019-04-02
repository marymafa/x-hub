import React, { useState, useEffect } from "react";
import Upload from "./upload";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Dashboard</h1>
      <div>container</div>
      <div>feed</div>
      <div>bottom nav</div>
    </div>
  );
};

export default Dashboard;
