import React, {useEffect, useState} from "react";
import ExamMain from "./ExamMain";

export default function ViewExams (){
    const [examList, setExamList] = useState([]);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    
    function handleGetRequest(){
        // e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/exams",{
            headers: {Authorization: 'Bearer ' + jwt.jwt}
        })
        .then((resp)=>resp.json())
        .then((data)=> {setExamList(data)})
    } 
    useEffect(handleGetRequest)

    function onDeleteExam(deletedExam){
      let afterDelete = examList.filter((exam) => exam.id !== deletedExam)
      setExamList(afterDelete)
    }

    function onEditExam(edittedExam){
      let filtered = examList.filter((exam)=> exam.id !== edittedExam.id)
      let updated = [...filtered, edittedExam]
      setExamList(updated)
    }
  
     
    return(
        <div>
            <h1> Exams' Lists</h1> 
            <ExamMain examInfo={examList} onEditExam={onEditExam} onDeleteExam={onDeleteExam}/>
            
        </div>
    )  
}