import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [ownerLogin, setOwnerLogin] = useState({            
            email: "",
            password: "",            
          })
    const [error, setError] = useState("");    
    const navigate = useNavigate();
    function handleChange(e) {
            setOwnerLogin({ ...ownerLogin, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault()
        // e.target.reset()
        fetch("https://virtualschools.herokuapp.com/owner/login", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
            body: JSON.stringify(ownerLogin) 
        })
        .then((res)=>{
          if (res.ok) {
            res.json().then((res)=> {
            localStorage.setItem("jwt", JSON.stringify(res))})
            navigate("/admin")
          } else {
            res.json().then((err) => (setError(err.message)))
          }
        })
    }
    return (
        <div className="Auth-form-container">            
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
          <form className="Auth-form"  onSubmit={handleSubmit}>
            <div className="Auth-form-content">
            <p className='error'>{ error }</p>
              <h3 className="Auth-form-title">Welcome back</h3>
              <h4 className="Auth-form-subtitle">Enter Details Here: </h4>                             
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  name="email"
                  placeholder="Enter Email Address"
                  value={ownerLogin.email}
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
                  value={ownerLogin.password}
                  onChange= { handleChange }
                  required
                  pattern=".{8,}"
                />
              </div>
              
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-info">
                  Log in
                </button>
              </div>
                               
            </div>
          </form>
        </div>
    )   
}