import React, { useState } from 'react'
//import Login from './Login';

const UpdateEducator = ({ id, onEditEducator}) => {
  
  const [educator, setEducator] = useState({
    name: "",
    email: "",
    password: "",    
  });
    const [showButton, setShow] = useState(true);
    const toggleShow= ()=>{
      setShow(()=>!showButton)
    }
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://virtualschools.herokuapp.com/educators/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Authorization: 'Bearer ' + jwt.jwt
            },
            body: JSON.stringify(educator)
        })
        .then(res=> res.json())
        .then(edittedEducator =>onEditEducator(edittedEducator))
        setShow(()=>!showButton)
    }

    function handleChange(e) {        
      setEducator({ ...educator, [e.target.name]: e.target.value });        
  }
  return (
    <div>
      {showButton?
      <button onClick={toggleShow} id={id} className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Edit</button>
      :
      <form onSubmit={handleSubmit} className="addForm">

<div className="row mb-3">               
        <label className="col-sm-2">Educator Name:</label>
        <div className="col-sm-10">
        <input 
          style={{
            outline: 1,
            background: "#001920",
            color: "#c5c8c8",
            width: "100%",
            border: 0,
            margin: "0 0 15px",
            padding: "15px",
            boxSizing: "border-box",
            fontSize: "14px"}}
            type="text" 
            defaultValue= {educator.name}
            placeholder= "Enter Educator Name"
            name= "name"
            onChange= {handleChange}
            />
            </div>
        </div>
        
        <div className="row mb-3">               
          <label className="col-sm-2">Educator Email:</label>
          <div className="col-sm-10">
            <input 
              style={{
                outline: 1,
                background: "#001920",
                color: "#c5c8c8",
                width: "100%",
                border: 0,
                margin: "0 0 15px",
                padding: "15px",
                boxSizing: "border-box",
                fontSize: "14px"}}
                type="text" 
                defaultValue={educator.email}
                placeholder="Enter Educator Email"
                name="email"
                onChange={handleChange}
            />
         </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Educator Password:</label>
            <div className="col-sm-10">
              <input 
              style={{
              outline: 1,
              background: "#001920",
              color: "#c5c8c8",
              width: "100%",
              border: 0,
              margin: "0 0 15px",
              padding: "15px",
              boxSizing: "border-box",
              fontSize: "14px"}}
              type="password" 
              defaultValue={educator.password}
              placeholder="Enter Educator Password"
              name="password"
              onChange={handleChange}
              required
              pattern=".{8,}"
            />
          </div>
         </div>
        {/* <textarea
          name="comment"
          defaultValue={content}
          onChange={(e) => setContent(e.target.value)}
        /> */}
        <input type="submit" value="Save change" />
      </form>

      }
    </div>
  );
}

export default UpdateEducator
