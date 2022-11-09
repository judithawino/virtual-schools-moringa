import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Alert } from 'react-alert'

export default function CreateOwner(){
    const [owner, setOwner] = useState({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          })
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    function handleChange(e) {
            setOwner({ ...owner, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/owners", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
            body: JSON.stringify(owner) 
        })
        .then((r) => {
            if (r.ok) {
                navigate("/login") 
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        // .then((data) => {
        //               // save the token to localStorage for future access
        //               localStorage.setItem("jwt", data.jwt);
        //               // save the owner somewhere (in state!) to log the owner in
        //               console.log(setOwner(data.owner));
        //               //console.log(data.owner)
        // })        
    }
    const errorMessage = (errors.map((error, index)=>(
        <ul>
          <li className='error' key={index}>{error}</li>
        </ul>
      )))
    return (
        <div className="Auth-form-container">
            {errors.length > 0?  errorMessage : null}
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
          <form className="Auth-form"  onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Create an account</h3>
              <h4 className="Auth-form-subtitle">Let's get started: </h4>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="name"
                  className="form-control mt-1"
                  name="name"
                  placeholder="Enter First and Last Name"
                  value={owner.name}
                  onChange= { handleChange }
                  required
                />
              </div>             
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  name="email"
                  placeholder="Enter Email Address"
                  value={owner.email}
                  onChange= { handleChange }
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  name="password"
                  placeholder="Password must begin with caps"
                  value={owner.password}
                  onChange= { handleChange }
                  required
                  pattern=".{8,}"
                />
              </div>
              <div className="form-group mt-3">
                <label>Confirm password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  name="password_confirmation"
                  placeholder="Confirm password"
                  value={owner.password_confirmation}
                  onChange= { handleChange }
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-info">
                  Sign Up
                </button>
              </div>        
            </div>
          </form>
        </div>
    )   
}







