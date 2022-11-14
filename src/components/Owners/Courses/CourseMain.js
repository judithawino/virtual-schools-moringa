import React from 'react';
import DeleteCourses from './DeleteCourses';
import UpdateCourses from './UpdateCourse';

export default function CourseMain({courseInfo, onDeleteCourse, onEditCourse}){  

    return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
          
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Logo</th>
            <th scope="col">Duration</th>
            <th scope="col">Update Action</th>
            <th scope="col">Delete Action</th>                        
          </tr>
        </thead> 
        {courseInfo.map((courses) => {
                return ( 
          <tbody key={courses.id}>            
                  <>
                  <tr className="table-secondary" >
                    <th scope="row">{courses.id}</th>
                    <td>{courses.title}</td>
                    <td><img alt="" src ={courses.image_url} style={{height: "50px"}}/></td>
                    <td>{courses.duration}</td>
                    <td><UpdateCourses id={courses.id} onEditCourse={onEditCourse}/> </td>
                    <td><DeleteCourses id={courses.id} onDeleteCourse={onDeleteCourse}/> </td>                                                    
                  </tr>
                  </>     
           
          </tbody> 
)})}       
      </table>         
    </div>  

)}