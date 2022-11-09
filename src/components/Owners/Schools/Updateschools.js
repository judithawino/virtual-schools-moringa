import React, { useState } from 'react'
import './Owner.css'

const UpdateSchool = () => {
    const [school, setschool] = useState({
      name: "",
      school_id: "",
      course_id: "",
      owner_id: "",
    });


    const[errors, setErrors] = useState([])
    function handleChange(e) {        
        setschool({ ...school, [e.target.name]: e.target.value });   


function handleSubmit(e) {
    e.preventDefault()
    fetch("https://virtualschools.herokuapp.com/schools", {
      method: "PATCH",
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(school),
    }).then((r) => r.json())
        .then((err) => setErrors(err.errors));
      
    }

    const errorMessage = (errors.map((error, index)=>(
        <ul>
          <li className='error' key={index}>{error}</li>
        </ul>
      )))

      return (
        <div className='containUpdateForm'>
          {errors.length > 0?  errorMessage : null}
    
          <form onSubmit={handleSubmit} className="updateForm" >
                <input type="text" 
                    defaultValue= {school.name}
            placeholder= "Enter School Name"
                    name= "name"
                    onChange= {handleChange}
                     />
             <input type="text" 
                    defaultValue={school.school_id}
            placeholder="Enter School School_id"
                    name="school_id"
                    onChange={handleChange}
                     />
             <input type="text" 
                    defaultValue={school.course_id}
            placeholder="Enter School Course_id"
                    name="course_id"
                    onChange={handleChange}
                     />
             <input type="text" 
                    defaultValue={school.owner_id}
            placeholder="Enter School Owner_id"
                    name="owner_id"
                    onChange={handleChange}
                     />
                            
                <br />
                
                <br />
                <input type="submit"  value="Submit" on/>
            </form>
        </div>
      );
    }
      }
    
    export default UpdateSchool