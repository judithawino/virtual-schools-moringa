// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import EditResource from './EditResource';


const ResourceCard = ({data, handleDeleteResource, handleUpdateResource}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [visible, setVisible] = useState(true)

  const {id, title} = data
  // const {username} = user


  function handleDelete(){
    fetch (`https://virtualschools.herokuapp.com/resources/${id}`, {
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((deletedResource) => handleDeleteResource(deletedResource))
  }

  return (
    <div className='card'>
        {visible?
          (<div> { isEditing ? (
            <EditResource
            id={id}
            data={data}
            setIsEditing={isEditing}
            handleUpdateResource={handleUpdateResource}
            />
            ): (
            <>
              <div className='delete-btns'>
                <button className='edit-btn' onClick={() => setIsEditing((isEditing) => !isEditing) } >

                </button>
                <button onClick={handleDelete} className='delete-btn'>X</button>

              </div>

            </>

           )} </div>):(
             <div className='resource-card'>
               <h2 className='res-info' onClick={() => setVisible(!visible)}  >Resource Info</h2>
               <h3>{title}</h3>
             </div>
           )
           }

          </div>
          

          )
        }


export default ResourceCard;
