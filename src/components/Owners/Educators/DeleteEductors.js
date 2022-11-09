import React from 'react'
import { confirmAlert } from 'react-confirm-alert'

function DeleteEducators({id,onDeleteEducator}) {
  const jwt = JSON.parse(localStorage.getItem("jwt"));

  function handleDelete(){
    fetch(`https://virtualschools.herokuapp.com/educators/${id}`,{
      "method": "DELETE",
      "headers":{
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + jwt.jwt
      }
    })
    onDeleteEducator(id)
  }

  function submitConfirmOption(){
		confirmAlert({
			title: "Confirm deletion",
			message:"All data will be lost. Wish to delete?",
			buttons: [
				{
					label: "Yes",
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
      <button onClick={submitConfirmOption} id={id} className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}}>Delete</button>
    </div>
  )
}

export default DeleteEducators
