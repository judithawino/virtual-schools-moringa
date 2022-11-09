import React, {useEffect, useState} from "react";
import EducatorMain from "./EducatorMain";

export default function ViewEducator (){
    const [educatorList, setEducatorList] = useState([]);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    
    function handleGetRequest(){
        // e.preventDefault()
        fetch("https://virtualschools.herokuapp.com/educators",{
            headers: {Authorization: 'Bearer ' + jwt.jwt}
        })
        .then((resp)=>resp.json())
        .then((data)=> {setEducatorList(data)})
    } 
    useEffect(handleGetRequest)

    function onDeleteEducator(deletedEducator){
      let afterDelete = educatorList.filter((educator) => educator.id !== deletedEducator)
      setEducatorList(afterDelete)
    }
  
    function onEditEducator(edittedEducator){
      let filtered = educatorList.filter((educator)=> educator.id !== edittedEducator.id)
      let updated = [...filtered, edittedEducator]
      setEducatorList(updated)
    }
    return(
        <div>
            <h1> Eductors Lists</h1> 
            <EducatorMain educatorInfo={educatorList} onEditEducator= {onEditEducator} onDeleteEducator={onDeleteEducator}/>
            
        </div>
    )  
}