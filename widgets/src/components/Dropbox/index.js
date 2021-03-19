import React from "react";

const Dropdown = ({ label, itemList }) => {
  const renderedItemList = itemList.map((item) => {
    return (
      <a key={`${"item " + item}`} className="item">
        {item}
      </a>
    );
  });

  return (
    <>
      <div className="ui menu">
        {/* <a className="item">File</a> */}

        <div className="ui dropdown visible active item">
          <span className="text">{label}</span>
          <i className="dropdown icon" style={{ color: "black" }}></i>

          <div className="menu visible transition">{renderedItemList}</div>
        </div>

        {console.log(renderedItemList)}
        {/* <a className="item">Selection</a> */}
      </div>
    </>
  );
};

export default Dropdown;
