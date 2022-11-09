// import CourseList from "../components/Owners/CourseList";

import NavbarComp from "../components/Owners/NavbarComp";
import Educator from "../components/Owners/Educators/Educators";
import Student from "../components/Owners/Students/Students";
// import School from "../components/Owners/Schools";
// import Student from "../components/Owners/Students";



const Owner = () => {
  return(
    <>
    <NavbarComp/>
    <Educator/>
    <Student/>
    {/* <Educator/>
    <Student/>
    <School/>
    <CourseList/> */}
    </>
  )
  };
  
  export default Owner;
  