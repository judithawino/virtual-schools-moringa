import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import Auth from "./components/Owners/Login/Auth";
import ViewSchools from "./components/Owners/Schools/ViewSchools";
import CreateSchools from "./components/Owners/Schools/CreateSchools";
import CreateEducator from "./components/Owners/Educators/CreateEducators";
import ViewEducator from "./components/Owners/Educators/ViewEducator";
import ViewStudents from "./components/Owners/Students/ViewStudents";
import CreateStudents from "./components/Owners/Students/CreateStudents";
// import Auth from "./components/Login/Auth";

// import AboutUs from "./components/About-us/AboutUs";
// //import Courses from "./components/Courses-section/Courses";
// import School from "./components/School/School";
// import UpdateCourse from "./components/Owners/UpdateCourse";
// import Educators from "./components/Educators/Educators";
// import Owner from "./pages/Owner";
// import CreateOwner from "./components/Owners/CreateOwner";
// import CourseList from "./components/Owners/CourseList";
// import CreateStudent from "./components/Owners/Createstudents";
// import CreateEducator from "./components/Owners/CreateEducators";
// import CreateSchool from "./components/Owners/Createschools";
// import UpdateStudent from "./components/Owners/Updatestudents";
// import Deletestudents from "./components/Owners/Deletestudents";
// import UpdateEducator from "./components/Owners/UpdateEducators";
// import UpdateSchool from "./components/Owners/Updateschools";
// import DeleteEductors from "./components/Owners/Deleteeductors";
// import DeleteSchools from "./components/Owners/Deleteschools";
// import Students from "./components/Owners/Students";
// import Schools from "./components/Owners/Schools";
// import LessonList from "./components/Lessons/LessonsList";
// //import ResourceList from "./components/Educators/ResourceList";
// import ResourceContainer from "./components/Educators/ResourceContainer";
// import LoginEducator from "./components/Educators/LoginEducator";
// import Learn from "./components/student-page/Learn";
// import ResourceForm from "./components/Educators/ResourceForm";
// import StudentLogin from "./components/student-page/Studentlogin";
// //import Logout from "./components/Owners/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/admin" element={< Owner/> } />
        <Route path="/admin/login" element={ <Auth/>}/>
        <Route path="/view/school" element={ < ViewSchools/>} />
        <Route path="/create/school" element={ < CreateSchools/>} />
        <Route path="/view/educator" element={<ViewEducator/> }/>
        <Route path="/create/educator" element={<CreateEducator/>} />
        <Route path="/view/students" element={<ViewStudents/> }/>
        <Route path="/create/students" element={<CreateStudents/> }/>
        {/* <Route path="/update/educator" element={<UpdateEducator/>}/> */}
        {/* <Route path="/learn" element={<Learn/>} />
        <Route path="/stulogin" element={<LoginEducator/>} />
        <Route path="/loginedu" element={<StudentLogin/>} />
        <Route path="/lesson" element={<LessonList />} />
        <Route path="/resource" element={<ResourceContainer />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/enroll" element={<CreateOwner />} />
        
        <Route path="/schools" element={<School />} />
        <Route path="/course/:courseId" element={<UpdateCourse />} />/
        <Route path="/educators" element={<Educators />} />
        <Route path="/login-educator" element={<LoginEducator/>} />
        
        <Route path="/educator" element={<Educators />} />
        <Route path="/create/educator" element={<CreateEducator />} />
        <Route path="/update/educator" element={<UpdateEducator />} />
        <Route path="/delete/educator" element={<DeleteEductors />} />
        <Route path="/students" element={<Students />} />
        <Route path="/create/student" element={<CreateStudent />} />
        <Route path="/update/student" element={<UpdateStudent />} />
        <Route path="/delete/student" element={<Deletestudents />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/create/school" element={<CreateSchool />} />
        <Route path="/update/school" element={<UpdateSchool />} />
        <Route path="/delete/school" element={<DeleteSchools />} />
        <Route exact path='/create-resource' element={<ResourceForm/>} /> */}
      </Routes>
    </BrowserRouter>
  );
  }

export default App;
