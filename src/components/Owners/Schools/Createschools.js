import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Educators from "./Educators";
import './Owner.css'

const CreateSchool = () => {
  const [school, setSchool] = useState({
    name: "",
    school_id: "",
    course_id: "",
    owner_id: "",
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  function handleChange(e) {
    setSchool({ ...Educators, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://virtualschools.herokuapp.com/schools", {
      method: "POST",
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(school),
    }).then((r) => {
      if (r.ok) {
        navigate("/schools");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const errorMessage = errors.map((error, index) => (
    <ul>
      <li className="error" key={index}>
        {error}
      </li>
    </ul>
  ));
  return (
    <div className="containCreateForm">
      {errors.length > 0 ? errorMessage : null}

      <form onSubmit={handleSubmit} className="addForm">
        <input
          type="text"
          defaultValue={school.name}
          placeholder="Enter School Name"
          name="name"
          onChange={handleChange}
        />

        <input
          type="text"
          defaultValue={school.email}
          placeholder="Enter School Email"
          name="email"
          onChange={handleChange}
        />

        <input
          type="text"
          defaultValue={school.school_id}
          placeholder="Enter Student School_id"
          name="school_id"
          onChange={handleChange}
        />
        <input
          type="text"
          defaultValue={school.course_id}
          placeholder="Enter School Course_id"
          name="course_id"
          onChange={handleChange}
        />
        <input
          type="text"
          defaultValue={school.owner_id}
          placeholder="Enter School Owner_id"
          name="owner_id"
          onChange={handleChange}
        />

        <br />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateSchool;