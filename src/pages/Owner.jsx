// import CourseList from "../components/Owners/CourseList";

import NavbarComp from "../components/Owners/NavbarComp";
import School from "../components/Owners/Schools/Schools";
import Educator from "../components/Owners/Educators/Educators";
import Student from "../components/Owners/Students/Students";
// 
// import Student from "../components/Owners/Students";



const Owner = () => {
  return(
    <>
    <NavbarComp/>
    <School/>
    <Educator/>
    <Student/>
    {/* <Educator/>
    <Student/>
    
    <CourseList/> */}
    </>
  )
  };
  
  export default Owner;
  