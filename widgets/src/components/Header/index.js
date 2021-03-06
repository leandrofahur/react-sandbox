import React from "react";

const Header = ({ onToggleMenu }) => {
  return (
    <div className="ui top inverted attached menu">
      <span
        className="item link gray"
        onClick={() => {
          onToggleMenu();
        }}
      >
        Menu
      </span>
    </div>
  );
};

export default Header;
