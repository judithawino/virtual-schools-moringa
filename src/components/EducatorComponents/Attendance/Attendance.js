import React from 'react';

export default function Attendance({attendanceInfo}){

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Percentage</th>
            <th scope="col">Lesson_Id</th> 
            <th scope="col">Student_Id</th>                       
          </tr>
        </thead>  
          <tbody>
            {attendanceInfo.map((attendance) => {
                return (
                  <> 
                  <tr className="table-secondary">
                    <td >{attendance.id}</td>
                    <td >{attendance.percentage}</td>
                    <td >{attendance.lesson_id}</td>  
                    <td >{attendance.student_id}</td>          
                  </tr>
                  </> )     

            })}
            
          </tbody>        
      </table>         
    </div>  

)}