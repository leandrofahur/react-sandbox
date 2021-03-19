import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, itemList }) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
      setToggle(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedItemList = itemList.map((item) => {
    return (
      <a key={`${"item " + item}`} className="item">
        {item}
      </a>
    );
  });

  return (
    <>
      <div className="ui menu" ref={dropdownRef}>
        {/* <a className="item">File</a> */}

        <div
          className={`ui dropdown ${toggle ? "visible active" : null} item`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span className="text">{label}</span>
          <i className="dropdown icon" style={{ color: "black" }}></i>

          <div className={`menu ${toggle ? "visible transition" : null}`}>
            {renderedItemList}
          </div>
        </div>

        {/* <a className="item">Selection</a> */}
      </div>
    </>
  );
};

export default Dropdown;
