import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav, Nav, Input } from "./styled-components";
import { Feed } from "./styled-components";

const Dashboard = () => {
  return (
    <div>
      <DashContainer>
        <Nav>
          <i class="fas fa-bars bar" />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" />
          <Input placeholder="search" />
        </Nav>
        <Feed>feed</Feed>
        <BtmNav>
          <i class="far fa-comment" />
          <i class="fas fa-upload" />
          <i class="fas fa-bell" />
          <i class="far fa-question-circle" />
        </BtmNav>
      </DashContainer>
    </div>
  );
};

export default Dashboard;
