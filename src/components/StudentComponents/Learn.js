import React from "react";
import NavBar from "./Navbar";
import Resources from "./Resources";
import CalenDar from "./Calendar";
import './student.css'
import Sidebar from "./Sidebar";

const Learn = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="side-res">
          <Sidebar/>
          <Resources />
          <CalenDar />
        </div>
      </div>
    </>
  );
};

export default Learn;
