import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../components/Owners/Owner.css"

const CreateCourses = () => {
    const [course, setCourse] = useState({
      title: "",
      image_url: "",
      duration: "",
      school_id: "",      
      owner_id: "",
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    function handleChange(e) {        
        setCourse({ ...course, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/courses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt.jwt
          },
          body: JSON.stringify(course),
        }).then((r) => {
          if (r.ok) {
            navigate("/view/course");
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
        <label className="col-sm-2">Course Title:</label>
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
            defaultValue= {course.name}
            placeholder= "Enter Course Title"
            name= "title"
            onChange= {handleChange}
            />
            </div>
        </div>
        
        <div className="row mb-3">               
          <label className="col-sm-2">Course Logo:</label>
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
                defaultValue={course.image_url}
                placeholder="Enter Logo Link"
                name="image_url"
                onChange={handleChange}
            />
         </div>
         </div>

         <div className="row mb-3">               
          <label className="col-sm-2">Duration:</label>
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
                defaultValue={course.duration}
                placeholder="Enter Logo Link"
                name="duration"
                onChange={handleChange}
            />
         </div>
         </div>       

         <div className="row mb-3">               
            <label className="col-sm-2">Course School Id:</label>
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
                defaultValue={course.school_id}
                placeholder="Enter Course School_id"
                name="school_id"
                onChange={handleChange}
              />
         </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Course Owner Id:</label>
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
                defaultValue={course.owner_id}
                placeholder="Enter Course Owner_id"
                name="owner_id"
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

export default CreateCourses