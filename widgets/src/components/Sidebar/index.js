import React, { useEffect } from "react";

const Sidebar = ({ menuToggle }) => {
  //   useEffect(() => {
  //     console.log(menuToggle);
  //   });
  return (
    <div
      className={`ui sidebar overlay left inverted menu ${
        menuToggle ? "visible" : null
      }`}
    >
      <ul>
        <li className="item link">Item 1</li>
        <li className="item link">Item 2</li>
        <li className="item link">Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
