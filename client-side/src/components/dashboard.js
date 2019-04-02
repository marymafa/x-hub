import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav } from "./styled-components";
import Nav from "./nav";
import Feeds from "./feed";
import { Dropdown } from "react-bootstrap";

import { Feed } from "./styled-components";
import BottomNav from "./bottom-nav";

const Dashboard = () => {
  return (
    <div>
      <DashContainer>
        <Nav />
        <Feed>
          <Feeds />
        </Feed>
        <BottomNav />
      </DashContainer>
    </div>
  );
};

export default Dashboard;
