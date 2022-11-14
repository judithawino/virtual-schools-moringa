import React, { useState } from 'react'

const UpdateExams = ({ id, onEditExam}) => {
  
  const [exam, setExam] = useState({
    
    title: "",
    start_date: "",
    start_time: "",
    duration: "",
    course_id: "",    
  });
    const [showButton, setShow] = useState(true);
    const toggleShow= ()=>{
      setShow(()=>!showButton)
    }
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://virtualschools.herokuapp.com/exams/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Authorization: 'Bearer ' + jwt.jwt
            },
            body: JSON.stringify(exam)
        })
        .then(res=> res.json())
        .then(edittedExam =>onEditExam(edittedExam))
        setShow(()=>!showButton)
    }

    function handleChange(e) {        
      setExam({ ...exam, [e.target.name]: e.target.value });        
  }
  return (
    <div>
      {showButton?
      <button onClick={toggleShow} id={id} className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Edit</button>
      :
      <form onSubmit={handleSubmit} className="addForm">

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
        
        <input type="submit" value="Save change" />
      </form>

      }
    </div>
  );
}

export default UpdateExams
