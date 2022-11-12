import React from 'react';
import DeleteSchools from './DeleteSchools';
import UpdateSchools from './UpdateSchools';

export default function SchoolMain({schoolInfo, onDeleteSchool, onEditSchool}){  

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Website</th>
            <th scope="col">School Owner</th>
            <th scope="col">Update Action</th>
            <th scope="col">Delete Action</th>                        
          </tr>
        </thead> 
        {schoolInfo.map((schools) => {
                return ( 
          <tbody key={schools.id}>            
                  <>
                  <tr className="table-secondary" >
                    <th scope="row">{schools.id}</th>
                    <td>{schools.name}</td>
                    <td>{schools.image_url}</td>
                    <td>{schools.owner.name}</td>                                        
                    <td><UpdateSchools id={schools.id} onEditSchool={onEditSchool}/> </td>
                    <td><DeleteSchools id={schools.id} onDeleteSchool={onDeleteSchool}/> </td>                                                    
                  </tr>
                  </>     
           
          </tbody> 
)})}       
      </table>         
    </div>  

)}