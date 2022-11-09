import React, { useState } from 'react';
import UpdateSchools from './Updateschools';
import './Owner.css'
    const DeleteSchools = ({data, handleDeleteSchools, handleUpdateSchools}) => {

      const [isUpdating, setIsUpdating] = useState(false);
      const [visible, setVisible] = useState(true)
      const {id,name,school_id,course_id,owner_id} = data
    
      function handleDelete(){
        fetch (`https://virtualschools.herokuapp.com/schools`, {
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deleteSchools) => handleDeleteSchools(deleteSchools))
      }
      return (
        <div className='card'>
            {visible?
              (<div> { isUpdating ? (
                <UpdateSchools
                data={data}
                setIsUpdating={isUpdating}
                handleUpdateSchools={handleUpdateSchools}
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
                 <div className='schools-card'>
                   <h2 className='res-info' onClick={() => setVisible(!visible)}  >schools Info</h2>
                 </div>
               )
               }
              </div>
              )
            }
    export default DeleteSchools;