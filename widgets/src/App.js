import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const onToggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* <Router>
        <Routes></Routes>
      </Router> */}
      <Header onToggleMenu={onToggleMenu} />
      <div className="ui attached pushable" style={{ height: "100vh" }}>
        <Sidebar menuToggle={toggle} />
        <div className={`pusher bottom ${toggle ? "dimmed" : null}`}>
          <Main />
        </div>
      </div>
    </>
  );
};

export default App;
