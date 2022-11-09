import React,{ useState, useEffect} from 'react'; 
//import NavBar from './NavBar';
import EducatorCard from './EducatorCard';
import ResourceContainer from './ResourceContainer';
import { BrowserRouter as Route, Routes} from "react-router-dom";
import './Educator.css'
import NavBar from '../student-page/Navbar';

const Educators = () => {
  const [data, setData] = useState ([])

  useEffect(() =>{
    fetch('https://virtualschools.herokuapp.com/resources')
    .then(r => r.json())
    .then(data =>{
      setData(data)
    })
  }, [])


  function handleDeleteResource(resourceToDelete){
    const updatedResources = data.filter((resource) => {
      if (resource.id !== resourceToDelete.id) {
        return resource
      } else {
        return null
      }
    });
    setData(updatedResources);
  }

  function handleUpdateResource(updatedResourceObj) {
    const editedResources = data.map((resource) => {
      if (resource.id === updatedResourceObj.id) {
        return updatedResourceObj;
      } else {
        return resource;
      }
    });
    setData(editedResources);
  }
  return (
    <div className="App">
      <NavBar/>
      <EducatorCard/>
      {/* <Routes>
        <Route exact path='/resources' element={
          <ResourceContainer
          data={data}
          handleDeleteResource={handleDeleteResource}
          handleUpdateResource={handleUpdateResource}
          />
        }
        />
      </Routes> */}

    
    </div>
  )
}

export default Educators;
