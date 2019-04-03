import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav, Navigation, Input } from "./styled-components";
import { Dropdown } from "react-bootstrap";

const Nav = () => {
  return (
    <React.Fragment>
      <Navigation>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <i class="fas fa-bars bar" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Preferences</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Filters</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Statistics</Dropdown.Item>
            <Dropdown.Item href="">Bookmarks</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <img src="/X.png" />
        <Input placeholder="search" />
      </Navigation>
    </React.Fragment>
  );
};
export default Nav;
