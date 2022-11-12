import React, {useEffect, useState} from "react";
import SchoolMain from "./SchoolMain";

export default function ViewSchools (){
    const [schoolList, setSchoolList] = useState([]);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    
    function handleGetRequest(){
        // e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/schools",{
            headers: {Authorization: 'Bearer ' + jwt.jwt}
        })
        .then((resp)=>resp.json())
        .then((data)=> {setSchoolList(data)})
    } 
    useEffect(handleGetRequest)

    function onDeleteSchool(deletedSchool){
      let afterDelete = schoolList.filter((school) => school.id !== deletedSchool)
      setSchoolList(afterDelete)
    }

    function onEditSchool(edittedSchool){
      let filtered = schoolList.filter((school)=> school.id !== edittedSchool.id)
      let updated = [...filtered, edittedSchool]
      setSchoolList(updated)
    }
  
     
    return(
        <div>
            <h1> Schools' Lists</h1> 
            <SchoolMain schoolInfo={schoolList} onEditSchool={onEditSchool} onDeleteSchool={onDeleteSchool}/>
            
        </div>
    )  
}