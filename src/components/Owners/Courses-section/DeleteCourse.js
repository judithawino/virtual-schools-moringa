import React from 'react'
import { confirmAlert } from 'react-confirm-alert'

function DeleteCourse({courseId,handleDeleteCourse}) {

  function handleDelete(){
    fetch(`https://virtualschools.herokuapp.com/courses/${courseId}`,{
      "method": "DELETE",
      "headers":{
        "Content-Type": "application/json"
      }
    })
    handleDeleteCourse(courseId)
  }

  function submit(){
		confirmAlert({
			title: "Delete this course",
			message:"Data will be deleted parmanently. Press ok to continue",
			buttons: [
				{
					label: "Ok",
					onClick : ()=> handleDelete()
				},
				{
					label: "No",
					onClick: () => null
				}
			]
		})
	}
  return (
    <div>
      <button onClick={submit} id={courseId} className='btn btn-warning mt-1'>Delete</button>
    </div>
  )
}

export default DeleteCourse