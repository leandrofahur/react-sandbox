import React, { useState } from "react";

const Navbar = () => {
  const [itemName, setItemName] = useState("");

  return (
    <div className="ui secondary pointing menu">
      <a
        id="home"
        href="/"
        className={`item ${itemName === "home" ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setItemName(e.target.attributes[0].value);
        }}
      >
        Home
      </a>
      <a
        id="about"
        href="/"
        className={`item ${itemName === "about" ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setItemName(e.target.attributes[0].value);
        }}
      >
        About Us
      </a>
      <a
        id="contact"
        thref="/"
        className={`item ${itemName === "contact" ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setItemName(e.target.attributes[0].value);
        }}
      >
        Contact
      </a>
      <div className="right menu">
        <a
          id="logout"
          href="/"
          className={`item ${itemName === "logout" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setItemName(e.target.attributes[0].value);
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Navbar;
