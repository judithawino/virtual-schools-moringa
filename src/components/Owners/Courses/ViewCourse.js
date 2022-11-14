import React, {useEffect, useState} from "react";
import CourseMain from "./CourseMain";

export default function ViewCourses (){
    const [courseList, setCourseList] = useState([]);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    
    function handleGetRequest(){
        // e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/courses",{
            headers: {Authorization: 'Bearer ' + jwt.jwt}
        })
        .then((resp)=>resp.json())
        .then((data)=> {setCourseList(data)})
    } 
    useEffect(handleGetRequest)

    function onDeleteCourse(deletedCourse){
      let afterDelete = courseList.filter((course) => course.id !== deletedCourse)
      setCourseList(afterDelete)
    }

    function onEditCourse(edittedCourse){
      let filtered = courseList.filter((course)=> course.id !== edittedCourse.id)
      let updated = [...filtered, edittedCourse]
      setCourseList(updated)
    }
  
     
    return(
        <div>
            <h1> Courses' Lists</h1> 
            <CourseMain courseInfo={courseList} onEditCourse={onEditCourse} onDeleteCourse={onDeleteCourse}/>
            
        </div>
    )  
}