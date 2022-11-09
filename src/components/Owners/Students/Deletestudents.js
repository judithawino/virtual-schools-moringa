
    import React, { useState } from 'react';
    import UpdateStudents from './Updatestudents';
    import './Owner.css'
    const StudentCard = ({data, handleDeleteStudent, handleUpdateStudents}) => {

      const [isUpdating, setIsUpdating] = useState(false);
      const [visible, setVisible] = useState(true)
      const {id,name,email,password,school_id,course_id,owner_id} = data
    
      function handleDelete(){
        fetch (`https://virtualschools.herokuapp.com/students`, {
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deletedStudent) => handleDeleteStudent(deletedStudent))
      }
      return (
        <div className='card'>
            {visible?
              (<div> { isUpdating ? (
                <UpdateStudents
                data={data}
                setIsUpdating={isUpdating}
                handleUpdateStudents={handleUpdateStudents}
                />
                ): (
                <>
                  <div className='delete-btns'>
                    <button className='update-btn' onClick={() => setIsUpdating((isUpdating) => !isUpdating) } >
                    </button>
                    <button onClick={handleDelete} className='delete-btn'>X</button>
                  </div>
                </>
               )} </div>):(
                 <div className='students-card'>
                   <h2 className='res-info' onClick={() => setVisible(!visible)}  >Students Info</h2>
                 </div>
               )
               }
              </div>
              )
            }
    export default StudentCard;
    
    
    
    
    
    
    
    
    
    