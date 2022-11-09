import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../components/Owners/Owner.css"

const CreateStudents = () => {
    const [student, setStudent] = useState({
      name: "",
      email: "",
      password: "",
      school_id: "",
      course_id: "",
      owner_id: "",
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    function handleChange(e) {        
        setStudent({ ...student, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/students", {
          method: "POST",
          // credentials: 'include',
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt.jwt
          },
          body: JSON.stringify(student),
        }).then((r) => {
          if (r.ok) {
            navigate("/view/students");
          } else {
            r.json()
            .then((err) => setErrors(err.errors));
          }
        })
    }

    const errorMessage = (errors.map((error, index)=>(
      <ul>
        <li className='error' key={index}>{error}</li>
      </ul>
    )))
  return (
    <div className='containCreateForm'>
      {errors.length > 0?  errorMessage : null}
      <form onSubmit={handleSubmit} className="addForm" >
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
              required
              pattern=".{8,}"
            />
          </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Student School Id:</label>
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
                defaultValue={student.school_id}
                placeholder="Enter Student School_id"
                name="school_id"
                onChange={handleChange}
              />
         </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Student Course Id:</label>
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
                defaultValue={student.course_id}
                placeholder="Enter Student Course_id"
                name="course_id"
                onChange={handleChange}
              />
         </div>
         </div>
			<br />
			<input type="submit"  value="Submit"/>
		</form>
    </div>
  );
}

export default CreateStudents