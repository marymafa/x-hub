import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav, Navigation, Input } from "./styled-components";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <React.Fragment>
      <BtmNav>

        <i class="far fa-comment" />
        <i class="fas fa-upload" />
        <i class="fas fa-bell" />
        <i class="far fa-question-circle" />
      </BtmNav>
      ;
    </React.Fragment>
  );
};
export default BottomNav;
