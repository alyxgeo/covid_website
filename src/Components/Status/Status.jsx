import React, { useState } from 'react'
import './Status.css'


const Status = (props) => {



  return (
    <div className='status-container'>

    <div className='status-steps'>

    <div className='status-sub'>
    <img className='status-img' src='/images/tick.png' alt=""/>
    <h5>Identification</h5>
    </div>

    <div className='status-sub'>
    <img className='status-img' src={`${props.counter}`} alt=""/>
    <h5>Vaccine Center</h5>
    </div>

    <div className='status-sub'>
    <img className='status-img' src={`${props.counter1}`}  alt=""/>
    <h5>Appointment</h5>
    </div>


    </div>

    </div>
  )
}

export default Status