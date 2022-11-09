import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../components/Owners/Owner.css"

const CreateEducator = () => {
    const [educator, setEducator] = useState({
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
        setEducator({ ...educator, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/educators", {
          method: "POST",
          // credentials: 'include',
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt.jwt
          },
          body: JSON.stringify(educator),
        }).then((r) => {
          if (r.ok) {
            navigate("/view/educator");
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

         <div className="row mb-3">               
            <label className="col-sm-2">Educator School Id:</label>
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
                defaultValue={educator.school_id}
                placeholder="Enter Student School_id"
                name="school_id"
                onChange={handleChange}
              />
         </div>
         </div>

         <div className="row mb-3">               
            <label className="col-sm-2">Educator Course Id:</label>
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
                defaultValue={educator.course_id}
                placeholder="Enter Educator Course_id"
                name="course_id"
                onChange={handleChange}
              />
         </div>
         </div>

         {/* <div className="row mb-3">               
            <label className="col-sm-2">Educator Owner Id</label>
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
                defaultValue={educator.owner_id}
                placeholder="Enter Educator Owner_id"
                name="owner_id"
                onChange={handleChange}
              />
              </div>
            </div>                         */}
						
			<br />
			<input type="submit"  value="Submit"/>
		</form>
    </div>
  );
}

export default CreateEducator