import React from 'react';
import DeleteExams from './DeleteExams';
import UpdateExams from './UpdateExams';

export default function ExamMain({examInfo, onDeleteExam, onEditExam}){  

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>          
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">Duration</th>
            <th scope="col">Course</th>
            <th scope="col">Update Action</th>
            <th scope="col">Delete Action</th>                        
          </tr>
        </thead> 
        {examInfo.map((exams) => {
                return ( 
          <tbody key={exams.id}>            
                  <>
                  <tr className="table-secondary" >
                    <th scope="row">{exams.id}</th>
                    <td>{exams.title}</td>
                    <td>{exams.exam_date}</td>
                    <td>{exams.start_time}</td>
                    <td>{exams.duration}</td>
                    <td>{exams.course.title}</td>
                    <td><UpdateExams id={exams.id} onEditExam={onEditExam}/> </td>
                    <td><DeleteExams id={exams.id} onDeleteExam={onDeleteExam}/> </td>                                                    
                  </tr>
                  </>     
           
          </tbody> 
)})}       
      </table>         
    </div>  

)}