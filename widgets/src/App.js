import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Dropdown from "./components/Dropbox";

const itemList = ["Option 01", "Option 02"];

const App = () => {
  return (
    <>
      {/* <Router>
        <Routes></Routes>
      </Router> */}
      <Dropdown label="Editor" itemList={itemList} />
    </>
  );
};

export default App;
