import React, {useState} from 'react';

export default function NewCourse (handleAddCourse){
    const [courseForm, setcourseForm] = useState({
        title: "",
        duration: "", 
        image_url: "", 
        school_id: "",
        owner_id: "",           
    })


    function handleChange(event){
        setcourseForm({
            ...courseForm,
            [event.target.name]: event.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('https://virtualschools.herokuapp.com/courses', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                title:courseForm.title,
                duration: courseForm.duration,
                image_url: courseForm.image_url,               
                school_id: courseForm.school_id,               
                owner_id: courseForm.owner_id                
            })
            }
        )
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
    return (
        <form onSubmit = {handleSubmit}>
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
                    value={courseForm.title}
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
                    value={courseForm.duration}
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
                    value={courseForm.image_url}
                    onChange={ handleChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">School Id</label>
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
                    name="school_id"
                    placeholder="Enter School Id"
                    value={courseForm.school_id}
                    onChange={ handleChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Owner Id</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        paddinag: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="owner_id"
                    placeholder="Enter owner Id"
                    value={courseForm.owner_id}
                    onChange={ handleChange }
                    required={true}
                /> 
                </div>
                </div>
                        
            <input type="submit" value="Add Lesson" />
        </form>
    )

}
