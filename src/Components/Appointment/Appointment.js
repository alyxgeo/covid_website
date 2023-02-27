import React from 'react'
import './Appointment.css'

const Appointment = (props) => { 
  console.log(props.userSelected)
  return (
    <div className='appointment-wrap'>
    
    <div className='appointment'>
    <h3 className='appointment-h'>Schedule an appointment</h3>
    </div>


<div className='appointment-container'>


<div className='appointment-details'>
<h3>{props.userSelected.name}</h3>
<p>{props.userSelected.address}</p>
<h4>{props.userSelected.sessions[0].vaccine}</h4>
<div className='line'></div>
<h5>Name</h5>
<p>date of birth</p>
</div>


<div className='appointment-booth'>
<p>Select vaccination booth</p>
<div className='booth-slot-input'></div>
</div>



<div className='timeslot-drop-h'>
<p>Select time slot</p>
<select className='timeslot-drop-br'>
  {props.userSelected.sessions[0].slots.map((item) => (
    <option key={item.time} >{item.time}</option>
  )
  )}
</select>
</div>


</div>
    </div>
  )
}

export default Appointment