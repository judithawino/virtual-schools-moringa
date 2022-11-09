import React, {useState} from 'react';

export default function NewAttendance (){
    const [attendanceForm, setAttendanceForm] = useState({
        percentage: "",
        lesson_id: "", 
        student_id: "",  
        educator_id: "",           
    })


    function inputChange(event){
        setAttendanceForm({
            ...attendanceForm,
            [event.target.name]: event.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('https://virtualschools.herokuapp.com/attendances', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                percentage:attendanceForm.percentage,
                lesson_id: attendanceForm.lesson_id,
                student_id: attendanceForm.student_id,
                educator_id: attendanceForm.educator_id                
            })
            }
        )
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Percentage</label>
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
                    name="percentage"
                    placeholder="Enter attendance percentage"
                    value={attendanceForm.percentage}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
            </div>
                <div className="row mb-3">
                <label className="col-sm-2">Lesson ID</label>
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
                    name="lesson_id"
                    placeholder="Enter the lesson id"
                    value={attendanceForm.lesson_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Student ID</label>
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
                    name="student_id"
                    placeholder="Enter the student id"
                    value={attendanceForm.student_id}
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
                    value={attendanceForm.educator_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                        
            <input type="submit" value="Add Attendance" />
        </form>
    )

}