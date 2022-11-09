import React, { useState } from 'react';

const EditResource = ({data, setIsEditing, handleUpdateResource }) => {

    const {id, title, attachment} = data;


    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedAttachment, setUpdatedAttachment] = useState(attachment);

    function handleTitleChange(e){
        setUpdatedTitle(e.target.value);
    }

    function handleAttachmentChange(e){
        setUpdatedAttachment(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch(`https://virtualschools.herokuapp.com/resources${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: updatedTitle,
                attachment: updatedAttachment,
            }),
        })
        .then((r) => r.json())
        .then((updatedResource) => handleUpdateResource(updatedResource))
        .then(() => setIsEditing(false) );

    }

  return (
    <form className='edit-resource' onSubmit={handleSubmit} >
       <label className='form-label' htmlFor='title' >Title</label>
       <input
       name='title'
       type='text'
       placeholder='Title here..'
       value={updatedTitle}
       onChange={handleTitleChange}
       className='edit-resource'
       ></input> 
       
       <br/>
       <label className='form-label' htmlFor='url' >Attachment</label>
       <input
       name='url'
       type='varchar'
       placeholder='Url here..'
       value={updatedAttachment}
       onChange={handleAttachmentChange}
       className='edit-resource'
       ></input> 
       <br/>
       <input className="save-button" type="submit" value="Save" />


      
    </form>
  )
}

export default EditResource;
