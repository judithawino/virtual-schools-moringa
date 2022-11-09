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
    function handleDelete(deletedEducator) {
        const newEducatorList=educatorList.filter((educator)=>
        educator.id!==deletedEducator.id);
        setEducatorList(newEducatorList);
    }  
    return(
        <div>
            <h1> Eductors Lists</h1> 
            <EducatorMain educatorInfo={educatorList} onDelete={handleDelete}/>
            {/* { educatorList.map((educators)=>(
               <table  className="table table-primary" key = {educators.id}>
               <thead>
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">School Id</th>
                   <th scope="col">Course Id</th>
                   {/* <th scope="col">Albums</th> */}
                 {/* </tr>
               </thead>
               <tbody> */}
                 {/* <tr className="table-secondary">
                   
                       <th scope="row" >{educators.id}</th>
                       <td>{educators.name}</td>
                       <td>{educators.email}</td>
                       <td>{educators.school_id}</td>
                       <td>{educators.course_id}</td>                    */}
                   
                   
                   {/* <td>{albums.map((album) => (
                       <li key = {album.id}>{album.album_name}</li>
                       ))}        
                   </td> */}
                 {/* </tr>
                 </tbody>
                 </table> 
                
            ))}       
      */} 
        </div>
    )  
}