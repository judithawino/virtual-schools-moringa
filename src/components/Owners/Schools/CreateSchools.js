import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../../components/Owners/Owner.css"

const CreateSchools = () => {
    const [school, setSchool] = useState({
      name: "",
      image_url: "",
      
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    function handleChange(e) {        
        setSchool({ ...school, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/schools", {
          method: "POST",
          // credentials: 'include',
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt.jwt
          },
          body: JSON.stringify(school),
        }).then((r) => {
          if (r.ok) {
            navigate("/view/school");
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
                placeholder="Enter School image_url"
                name="image_url"
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

export default CreateSchools