import React from 'react';
import DeleteStudents from './DeleteStudents';
import UpdateStudents from './UpdateStudents';

export default function StudentMain({studentInfo, onDeleteStudent, onEditStudent}){  

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">School Id</th>
            <th scope="col">Update Action</th>
            <th scope="col">Delete Action</th>                        
          </tr>
        </thead> 
        {studentInfo.map((students) => {
                return ( 
          <tbody key={students.id}>            
                  <>
                  <tr className="table-secondary" >
                    <th scope="row">{students.id}</th>
                    <td>{students.name}</td>
                    <td>{students.email}</td>
                    <td>{students.school_id}</td>
                    <td><UpdateStudents id={students.id} onEditStudent={onEditStudent}/> </td>
                    <td><DeleteStudents id={students.id} onDeleteStudent={onDeleteStudent}/> </td>                                                    
                  </tr>
                  </>     
           
          </tbody> 
)})}       
      </table>         
    </div>  

)}