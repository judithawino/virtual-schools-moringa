import React, {useState} from 'react';

export default function NewLesson (){
    const [lessonForm, setLessonForm] = useState({
        topic: "",
        course_id: "", 
        educator_id: "",            
    })


    function inputChange(event){
        setLessonForm({
            ...lessonForm,
            [event.target.name]: event.target.value
        })
    }
    // console.log(inputChange())
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('https://virtualschools.herokuapp.com/lessons', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                topic:lessonForm.topic,
                course_id: lessonForm.course_id,
                educator_id: lessonForm.educator_id                
            })
            }
        )
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Lesson Topic</label>
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
                    name="topic"
                    placeholder="Enter Lesson Topic"
                    value={lessonForm.topic}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
            </div>
                <div className="row mb-3">
                <label className="col-sm-2">Course ID</label>
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
                    name="course_id"
                    placeholder="Enter the course id"
                    value={lessonForm.course_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Educator ID</label>
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
                    name="educator_id"
                    placeholder="Enter the educator id"
                    value={lessonForm.educator_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                        
            <input type="submit" value="Add Lesson" />
        </form>
    )

}