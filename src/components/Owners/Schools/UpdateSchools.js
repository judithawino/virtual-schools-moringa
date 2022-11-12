import React, { useState } from 'react'

const UpdateSchools = ({ id, onEditSchool}) => {
  
  const [school, setSchool] = useState({
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
        fetch(`https://virtualschools.herokuapp.com/schools/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Authorization: 'Bearer ' + jwt.jwt
            },
            body: JSON.stringify(school)
        })
        .then(res=> res.json())
        .then(edittedSchool =>onEditSchool(edittedSchool))
        setShow(()=>!showButton)
    }

    function handleChange(e) {        
      setSchool({ ...school, [e.target.name]: e.target.value });        
  }
  return (
    <div>
      {showButton?
      <button onClick={toggleShow} id={id} className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Edit</button>
      :
      <form onSubmit={handleSubmit} className="addForm">

<div className="row mb-3">               
        <label className="col-sm-2">School Name:</label>
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
            defaultValue= {school.name}
            placeholder= "Enter School Name"
            name= "name"
            onChange= {handleChange}
            />
            </div>
        </div>
        
        <div className="row mb-3">               
          <label className="col-sm-2">School Website:</label>
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
                defaultValue={school.image_url}
                placeholder="Enter School Email"
                name="email"
                onChange={handleChange}
            />
         </div>
         </div>

         
        <input type="submit" value="Save change" />
      </form>

      }
    </div>
  );
}

export default UpdateSchools
