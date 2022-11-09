import React,{useEffect, useState} from 'react';
import CourseCard from './CourseCard'
import './Courses.css'

function CourseList() {
  const [courses, setCourses] = useState([])

    useEffect(()=> {
        fetch("https://virtualschools.herokuapp.com/courses")
        .then((res) => res.json())
        .then((data) => setCourses(data)) 
    }, [])
    
    function handleAddCourse(newCourse){
      setCourses([...courses, newCourse]);
    }
    
    function handleDeleteCourse(id){
      setCourses(courses.filter(course => course.id !== id))
    }

    function handleCourseUpdate(updatedCourse){
      const updatedCourses =courses.map((course) => {
        if(course.id === updatedCourse.id){
          return updatedCourse
        }else{
          return course
        }
      });
      setCourses(updatedCourses);
    }

   console.log(courses)

    let course = courses.map((course)=>(

        <CourseCard handleCourseUpdate={handleCourseUpdate} handleDeleteCourse={handleDeleteCourse} key={course.id} setCourses={setCourses} courses={courses} title={course.title} duration={course.duration} courseId={course.id} card={course.image_url}/>
    ))

  return (
    <div className="cards" id='courses'>
      {course}
    </div>
  );
}

export default CourseList;
