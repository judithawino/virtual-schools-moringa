import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const ResourceForm = (addResource) => {
  const [title, setTitle] = useState("");
  const [attachment, setAttachment] = useState ("");
  const [resource, setResource] = useState('');
  const [resourceData, setResourceData] = useState([]);
  let navigate = useNavigate();

  function handleTitleChange(e){
    setTitle (e.target.value);
  }
  function handleAttachmentChange(e) {
    setAttachment (e.target.value);
  }
  function handleSubmit (e) {
    e.preventDefault();
    const newResourceObj = {
      title:title,
      attachment:attachment,
      user_id: 5,  
    }

    fetch ('https://virtualschools.herokuapp.com/resources',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newResourceObj)
    })
    .then(response => response.json())
    .then (navigate("/resources", {replace: true } ))
    setTitle("")
    setAttachment("")
  }

  useEffect(() => {
    fetch ('https://virtualschools.herokuapp.com/resources')
    .then(r => r.json())
    .then(data => setResourceData(data))
  }, [] )

  const resourceOptions = resourceData.map ( ({ id, resource_name }) =>
  <option key={id} value={id}> {resource_name} </option>
  )
  function handleResourceSelect (e){
    setResource(e.target.value)
  }
  

  return (
    <>
      <br/>
      <h2> Add a Resource </h2>
      <br/>
      <form onSubmit={handleSubmit} className="form">
        <label className='input-label' htmlFor='resource-data' >Resources </label>
        <br/>
          <select id='resource-data' onChange={handleResourceSelect}>
            {resourceOptions}

          </select>
          <br/>
          <br/>
          <label className='input-label' htmlFor='title' >Title </label>
          <input
            name='Title'
            type='string'
            placeholder='Enter Title'
            value={title}
            onChange={handleTitleChange}
            className='form-input'
          ></input>
          <br/>
          <br/>
          <label className='input-label' htmlFor='attachment' >Attachment</label>
          <input
            name='Attachment'
            type='varchar'
            placeholder='Input URL'
            value={attachment}
            onChange={handleAttachmentChange}
            className='form-input'
          ></input>
          <br/>
          <br/>
          <button className="form-input" type="submit">Add Resource</button> 



      </form>  
    </>
  )
}

export default ResourceForm;
