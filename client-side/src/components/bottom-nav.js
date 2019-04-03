import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav, Navigation, Input } from "./styled-components";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <React.Fragment>
      <BtmNav>

       <Link style={{paddingTop:"0.5rem"}} to="/chat">
          <i class="far fa-comment" />
        </Link>
        <i class="fas fa-upload" />
        <i class="fas fa-bell" />
        <i class="far fa-question-circle" />
      </BtmNav>
      ;
    </React.Fragment>
  );
};
export default BottomNav;
