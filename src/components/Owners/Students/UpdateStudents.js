import React, { useState } from 'react'

const UpdateStudents = ({ id, onEditStudent}) => {
  
  const [student, setStudent] = useState({
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
        fetch(`https://virtualschools.herokuapp.com/students/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Authorization: 'Bearer ' + jwt.jwt
            },
            body: JSON.stringify(student)
        })
        .then(res=> res.json())
        .then(edittedStudent =>onEditStudent(edittedStudent))
        setShow(()=>!showButton)
    }

    function handleChange(e) {        
      setStudent({ ...student, [e.target.name]: e.target.value });        
  }
  return (
    <div>
      {showButton?
      <button onClick={toggleShow} id={id} className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Edit</button>
      :
      <form onSubmit={handleSubmit} className="addForm">

<div className="row mb-3">               
        <label className="col-sm-2">Student Name:</label>
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
            defaultValue= {student.name}
            placeholder= "Enter Student Name"
            name= "name"
            onChange= {handleChange}
            />
            </div>
        </div>
        
        <div className="row mb-3">               
          <label className="col-sm-2">Student Email:</label>
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
                defaultValue={student.email}
                placeholder="Enter Student Email"
                name="email"
                onChange={handleChange}
            />
         </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Student Password:</label>
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
              defaultValue={student.password}
              placeholder="Enter Student Password"
              name="password"
              onChange={handleChange}
        //       required
              pattern=".{8,}"
            />
          </div>
         </div>        
        <input type="submit" value="Save change" />
      </form>

      }
    </div>
  );
}

export default UpdateStudents
