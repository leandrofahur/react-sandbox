import React, { useEffect, useRef, useState } from "react";

import "./index.css";

const Navbar = () => {
  const [itemName, setItemName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navbarRef = useRef();
  const BREAKPOINT = 760;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (navbarRef.current && navbarRef.current.contains(e.target)) {
        return;
      }
      setIsSidebarVisible(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

  const navbarWeb = () => {
    return (
      <div className="ui secondary menu">
        <a
          id="home"
          href="/"
          className={`item ${itemName === "home" ? "active" : null}`}
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
          className={`item ${itemName === "about" ? "active" : null}`}
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
          className={`item ${itemName === "contact" ? "active" : null}`}
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
            className={`item ${itemName === "logout" ? "active" : null}`}
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

  const navbarTablet = () => {
    return (
      <div ref={navbarRef} className="ui secondary pointing menu">
        <button
          className="item  floating right"
          onClick={(e) => {
            e.preventDefault();
            setItemName(e.target.attributes[0].value);
            setIsSidebarVisible(true);
          }}
        >
          <i className="bars icon"></i>
          {console.log(isSidebarVisible)}
        </button>
        <div
          className={`ui right vertical wide sidebar icon menu ${
            isSidebarVisible ? "visible" : null
          }`}
        >
          <div className="dimmed pusher">
            <a
              id="home"
              href="/"
              className={`item ${itemName === "home" ? "active" : null}`}
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
              className={`item ${itemName === "about" ? "active" : null}`}
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
              className={`item ${itemName === "contact" ? "active" : null}`}
              onClick={(e) => {
                e.preventDefault();
                setItemName(e.target.attributes[0].value);
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  };

  return <>{width >= BREAKPOINT ? navbarWeb() : navbarTablet()}</>;
};

export default Navbar;
