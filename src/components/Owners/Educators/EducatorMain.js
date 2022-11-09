import React from 'react';

export default function EducatorMain({educatorInfo, onDelete}){ 
  const jwt = JSON.parse(localStorage.getItem("jwt"));

    function handleDeleteClick() {
        fetch(`https://virtualschools.herokuapp.com/educators/45`, {
          method: "DELETE",
          headers: {Authorization: 'Bearer ' + jwt.jwt}
        })
          .then((r) => r.json())
          .then(() => onDelete(educatorInfo));
        
      }

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">School Id</th>
            <th scope="col">Action</th>                        
          </tr>
        </thead> 
        {educatorInfo.map((educators) => {
                return ( 
          <tbody key={educators.id}>            
                  <>
                  <tr className="table-secondary" >
                    <th scope="row">{educators.id}</th>
                    <td>{educators.name}</td>
                    <td>{educators.email}</td>
                    <td>{educators.school_id}</td>
                    <td><button className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}} onClick={handleDeleteClick}>Delete</button></td>                                
                  </tr>
                  </>
                 
           {/* <button className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}} onClick={handleDeleteClick}>Delete</button>  */}
          </tbody> 
)})}       
      </table>         
    </div>  

)}