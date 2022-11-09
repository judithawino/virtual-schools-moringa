import React from 'react';
import {Link} from 'react-router-dom'
import DeleteCourse from "./DeleteCourse"


function CourseCard({handleCourseUpdate={handleCourseUpdate}, handleDeleteCourse, courseId, card, duration, title, setCourses, courses}){

  // function handleDelete(){
  //   fetch(`https://virtualschools.herokuapp.com/courses/${courseId}`,{
  //     method: "DELETE"
  //   })
  //   .then((res) => res.json())
  //   .then(()=>{
  //   setCourses(courses.filter(course => course.id !== courseId))
    
  //   })
  // }

    return (
      <div className="card" style={{width: 18 + 'rem'}}>
        <img src={card} className="card-img-top" alt={card} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>Course Duration:{duration} Weeks</h6>
          <Link to={"/course/" + courseId} className="btn btn-secondary">Update</Link>
          {/* <button className="btn btn-warning mt-1" onClick={handleDelete}>Delete</button> */}
          <DeleteCourse courseId={courseId} handleDeleteCourse={handleDeleteCourse}/>
        </div>
    </div>

    )

}

export default CourseCard;


