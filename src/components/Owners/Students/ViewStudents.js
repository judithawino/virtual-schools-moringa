import React, {useEffect, useState} from "react";
import StudentMain from "./StudentMain";

export default function ViewStudents (){
    const [studentList, setStudentList] = useState([]);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    
    function handleGetRequest(){
        // e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/students",{
            headers: {Authorization: 'Bearer ' + jwt.jwt}
        })
        .then((resp)=>resp.json())
        .then((data)=> {setStudentList(data)})
    } 
    useEffect(handleGetRequest)

    function onDeleteStudent(deletedStudent){
      let afterDelete = studentList.filter((student) => student.id !== deletedStudent)
      setStudentList(afterDelete)
    }

    function onEditStudent(edittedStudent){
      let filtered = studentList.filter((student)=> student.id !== edittedStudent.id)
      let updated = [...filtered, edittedStudent]
      setStudentList(updated)
    }
  
     
    return(
        <div>
            <h1> Students' Lists</h1> 
            <StudentMain studentInfo={studentList} onEditStudent={onEditStudent} onDeleteStudent={onDeleteStudent}/>
            
        </div>
    )  
}