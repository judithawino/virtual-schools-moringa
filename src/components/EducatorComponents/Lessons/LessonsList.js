import React, {useState, useEffect} from 'react';
import Lesson from './Lesson';
import NewLesson from './NewLesson';


export default function LessonList(){
    const [lessonInfo, setLessonInfo] = useState([]);

    function handleLessonFetch(){
        fetch ('https://virtualschools.herokuapp.com/lessons')
        .then ((resp)=>resp.json())
        .then ((data)=>{
            setLessonInfo(data);
        })
    }
    useEffect(handleLessonFetch, [])

    return (
        <div>
            <Lesson lessonInfo = {lessonInfo}/>  
            <NewLesson/>                     
        </div>
    );    
}