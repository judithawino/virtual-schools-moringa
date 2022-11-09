import React, {useState} from 'react'; 
import {useParams} from 'react-router-dom'


function UpdateCourse({handleCourseUpdate}){

    const [updatedCourse, setUpdatedCourse] = useState({
        title: "",
        duration: "",
        image_url: "",
    })

    let {courseId} = useParams()

    function handleChange(e){
        setUpdatedCourse({...updatedCourse, [e.target.name]: e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault();
         

        const updatedObj = {

            title: updatedCourse.title,
            duration: updatedCourse.duration,
            image_url: updatedCourse.image_url
        }

        fetch(`https://virtualschools.herokuapp.com/courses/${courseId}`,{
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(updatedObj),

         })
         .then((res) => res.json())
         .then((updatedCourse) => handleCourseUpdate(updatedCourse))
    }

    return (
        <div className="updateForm">
            <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Course Title</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="title"
                    placeholder="Enter course title"
                    value={updatedCourse.title}
                    onChange={ handleChange }
                    required={true}
                /> 
                </div>
            </div>
                <div className="row mb-3">
                <label className="col-sm-2">Course Duration In Weeks</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="duration"
                    placeholder="Enter course duration"
                    value={updatedCourse.duration}
                    onChange={ handleChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Image Url</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="image_url"
                    placeholder="Enter Image Url"
                    value={updatedCourse.image_url}
                    onChange={ handleChange }
                    required={true}
                /> 
                </div>
                </div>
               <div>
               <input
                    className=" mt-4 btn btn-primary"type="submit"/>
               </div>
            </form>
        </div>
    )
}

export default UpdateCourse;

