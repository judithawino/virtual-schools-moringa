import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import Dropdown from 'react-bootstrap/Dropdown';
import './Styles/Calendar.css';
const CalenDar = () => {
    const [dateState, setDateState] = useState (new Date())
    const changeDate = (e) => {
        setDateState (e)
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-auto min-vh-100 bg-dark'>
          <Dropdown>
            
          </Dropdown>
         <Calendar value ={dateState} onChange={changeDate}  />
         <p style={{color:'white'}}>The selected date is <b>{moment(dateState).format('Do MMMM YYYY')}</b></p>

        </div>

      </div>
    
    </div>
  )
}

export default CalenDar;
