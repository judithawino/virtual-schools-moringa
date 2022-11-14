import React, { useState } from 'react'

const UpdateCourses = ({ id, onEditCourse}) => {
  
  const [course, setCourse] = useState({
    title: "",
    image_url: "",
    duration: "",    
  });
    const [showButton, setShow] = useState(true);
    const toggleShow= ()=>{
      setShow(()=>!showButton)
    }
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://virtualschools.herokuapp.com/courses/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Authorization: 'Bearer ' + jwt.jwt
            },
            body: JSON.stringify(course)
        })
        .then(res=> res.json())
        .then(edittedCourse =>onEditCourse(edittedCourse))
        setShow(()=>!showButton)
    }

    function handleChange(e) {        
      setCourse({ ...course, [e.target.name]: e.target.value });        
  }
  return (
    <div>
      {showButton?
      <button onClick={toggleShow} id={id} className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Edit</button>
      :
      <form onSubmit={handleSubmit} className="addForm">

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
            defaultValue= {course.title}
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
                placeholder="Enter Course Logo Link"
                name="image_url"
                onChange={handleChange}
            />
         </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Course Duration:</label>
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
              placeholder="Enter Course Duration"
              name="duration"
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

export default UpdateCourses
