import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Owner.css'

const CreateStudent = () => {
    const [student, setStudent] = useState({
      id: "",
      name: "",
      email: "",
      password: "",
      school_id: "",
      course_id: "",
      owner_id: "",
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
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
          },
          body: JSON.stringify(student),
        }).then((r) => {
          if (r.ok) {
            navigate("/schools");
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
			<input type="text" 
				defaultValue= {student.name}
        placeholder= "Enter Student Name"
				name= "name"
				onChange= {handleChange}
				 />

        <input type="text" 
				defaultValue={student.email}
        placeholder="Enter Student Email"
				name="email"
				onChange={handleChange}
				 />
         <input type="password" 
				defaultValue={student.password}
        placeholder="Enter Student Password"
				name="password"
				onChange={handleChange}
				 />
         <input type="text" 
				defaultValue={student.school_id}
        placeholder="Enter Student School_id"
				name="school_id"
				onChange={handleChange}
				 />
         <input type="text" 
				defaultValue={student.course_id}
        placeholder="Enter Student Course_id"
				name="course_id"
				onChange={handleChange}
				 />
         <input type="text" 
				defaultValue={student.owner_id}
        placeholder="Enter Student Owner_id"
				name="owner_id"
				onChange={handleChange}
				 />
                        
			<br />
			
			<br />
			<input type="submit"  value="Submit"/>
		</form>
    </div>
  );
}

export default CreateStudent