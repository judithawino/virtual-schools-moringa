import React, {useState, useEffect} from 'react';
import Attendance from './Attendance';


export default function AttendanceList(){
    const [attendanceInfo, setAttendanceInfo] = useState([]);

    function handleAttendanceFetch(){
        fetch ('https://virtualschools.herokuapp.com/attendances')
        .then ((resp)=>resp.json())
        .then ((data)=>{
            setAttendanceInfo(data);
        })
    }
    useEffect(handleAttendanceFetch, [])

    return (
        <div>
            <Attendance attendanceInfo = {attendanceInfo}/>                       
        </div>
    );    
}