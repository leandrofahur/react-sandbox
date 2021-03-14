import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  // const [itemName, setItemName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  // const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // const navbarRef = useRef();
  const BREAKPOINT = 760;

  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  // useEffect(() => {
  //   const onBodyClick = (e) => {
  //     if (navbarRef.current && navbarRef.current.contains(e.target)) {
  //       return;
  //     }
  //     setIsSidebarVisible(false);
  //   };
  //   document.body.addEventListener("click", onBodyClick);
  //   return () => {
  //     document.removeEventListener("click", onBodyClick);
  //   };
  // }, []);

  const navbarWeb = () => {
    return (
      <div className="ui secondary menu">
        <div className="right menu">
          <NavLink
            id="home"
            exact
            to="/"
            className="item"
            // activeClassName={"active"}
          >
            Home
          </NavLink>

          <NavLink
            id="about"
            to="/message"
            className="item"
            // activeClassName={"active"}
            // onClick={(e) => {
            // e.preventDefault();
            // setItemName(e.target.attributes[0].value);
            // }}
          >
            About Us
          </NavLink>

          {/* <Link
            id="contact"
            to="/contact"
            className={`item ${itemName === "contact" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setItemName(e.target.attributes[0].value);
            }}
          >
            Contact
          </Link>
          <Link
            id="login"
            to="/"
            className={`item ${itemName === "login" ? "active" : null}`}
            onClick={(e) => {
              e.preventDefault();
              setItemName(e.target.attributes[0].value);
            }}
          >
            Login
          </Link> */}
        </div>
      </div>
    );
  };

  // const navbarTablet = () => {
  //   return (
  //     <div ref={navbarRef} className="ui secondary pointing menu">
  //       <button
  //         className="item  floating right"
  //         onClick={(e) => {
  //           e.preventDefault();
  //           setItemName(e.target.attributes[0].value);
  //           setIsSidebarVisible(true);
  //         }}
  //       >
  //         <i className="bars icon"></i>
  //         {console.log(isSidebarVisible)}
  //       </button>
  //       <div
  //         className={`ui right vertical wide sidebar icon menu ${
  //           isSidebarVisible ? "visible" : null
  //         }`}
  //       >
  //         <div className="dimmed pusher">
  //           <a
  //             id="home"
  //             href="/"
  //             className={`item ${itemName === "home" ? "active" : null}`}
  //             onClick={(e) => {
  //               e.preventDefault();
  //               setItemName(e.target.attributes[0].value);
  //             }}
  //           >
  //             Home
  //           </a>
  //           <a
  //             id="about"
  //             href="/"
  //             className={`item ${itemName === "about" ? "active" : null}`}
  //             onClick={(e) => {
  //               e.preventDefault();
  //               setItemName(e.target.attributes[0].value);
  //             }}
  //           >
  //             About Us
  //           </a>
  //           <a
  //             id="contact"
  //             thref="/"
  //             className={`item ${itemName === "contact" ? "active" : null}`}
  //             onClick={(e) => {
  //               e.preventDefault();
  //               setItemName(e.target.attributes[0].value);
  //             }}
  //           >
  //             Contact
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // return <>{width >= BREAKPOINT ? navbarWeb() : navbarTablet()}</>;
  return <>{width >= BREAKPOINT ? navbarWeb() : null}</>;
};

export default Navbar;
