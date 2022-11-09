import React, { useState } from "react";
import './Owner.css'

const UpdateEducator = () => {
  const [educator, setEducator] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    school_id: "",
    course_id: "",
    owner_id: "",
  });

  const [errors, setErrors] = useState([]);
  function handleChange(e) {
    setEducator({ ...educator, [e.target.name]: e.target.value });
  }
    function handleSubmit(e) {
      e.preventDefault();
      fetch("https://virtualschools.herokuapp.com/educators", {
        method: "PATCH",
        // credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(educator),
      })
        .then((r) => r.json())
        .then((err) => setErrors(err.errors));
    }

    const errorMessage = errors.map((error, index) => (
      <ul>
        <li className="error" key={index}>
          {error}
        </li>
      </ul>
    ));

    return (
      <div className="containUpdateForm">
        {errors.length > 0 ? errorMessage : null}

        <form onSubmit={handleSubmit} className="updateForm">
          <input
            type="text"
            defaultValue={educator.name}
            placeholder="Enter Educator Name"
            name="name"
            onChange={handleChange}
          />

          <input
            type="text"
            defaultValue={educator.email}
            placeholder="Enter Educator Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            defaultValue={educator.password}
            placeholder="Enter Educator Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="text"
            defaultValue={educator.school_id}
            placeholder="Enter Educator School_id"
            name="school_id"
            onChange={handleChange}
          />
          <input
            type="text"
            defaultValue={educator.course_id}
            placeholder="Enter Educator Course_id"
            name="course_id"
            onChange={handleChange}
          />
          <input
            type="text"
            defaultValue={educator.owner_id}
            placeholder="Enter Educator Owner_id"
            name="owner_id"
            onChange={handleChange}
          />

          <br />

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

export default UpdateEducator;
