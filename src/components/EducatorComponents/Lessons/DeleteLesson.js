import React from 'react'
import {useNavigate} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';

export default function Deletelesson({id,onDeleteLesson}){
  const navigate = useNavigate()
  function handleDelete(){
    fetch(`https://virtualschools.herokuapp.com/lessons${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    onDeleteLesson(id)
    navigate('/')
  }

  function submit(){
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
      <button onClick={submit} id={id} className="comment">Delete</button>
    </div>
  )
}