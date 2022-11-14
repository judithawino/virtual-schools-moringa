import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../components/Owners/Owner.css"

const CreateExams = () => {
    const [exam, setExam] = useState({      
    title: "",
    start_date: "",
    start_time: "",
    duration: "",
    course_id: "",  
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    function handleChange(e) {        
        setExam({ ...exam, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/exams", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt.jwt
          },
          body: JSON.stringify(exam),
        }).then((r) => {
          if (r.ok) {
            navigate("/view/exam");
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
        <label className="col-sm-2">Exam Title:</label>
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
            defaultValue= {exam.title}
            placeholder= "Enter Exam Title"
            name= "title"
            onChange= {handleChange}
            />
            </div>
        </div>
        
        <div className="row mb-3">               
          <label className="col-sm-2">Exam Date:</label>
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
                defaultValue={exam.start_date}
                placeholder="Enter exam Logo Link"
                name="start_date"
                onChange={handleChange}
            />
         </div>
         </div>
         <div className="row mb-3">               
          <label className="col-sm-2">Exam Time:</label>
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
                defaultValue={exam.start_time}
                placeholder="Enter Exam Time"
                name="start_time"
                onChange={handleChange}
            />
         </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Exam Duration:</label>
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
              defaultValue={exam.duration}
              placeholder="Enter Exam Duration"
              name="duration"
              onChange={handleChange}
 
            />
          </div>
         </div>
         <div className="row mb-3">               
          <label className="col-sm-2">Exam Course:</label>
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
                defaultValue={exam.course_id}
                placeholder="Enter Exam Course"
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

export default CreateExams