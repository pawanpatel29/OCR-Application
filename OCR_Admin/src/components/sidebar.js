import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
      Home
      </a>

      <a className="menu-item" href="/Results">
      Results
      </a>
    </Menu>
  );
};