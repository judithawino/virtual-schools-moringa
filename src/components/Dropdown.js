import React from "react";
import './Dropdown.css'
function Drop() {
  return (
    // <div class="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          enroll
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {/* <a href="/login">Owner</a> */}
          <a href="/stulogin">Educator</a>
          <a href="/loginedu">Student</a>
        </div>
      </div>
    // </div>
  );
}
export default Drop