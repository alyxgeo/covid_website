import React, { useState } from 'react'
import './Vaccinebutton.css'

const Vaccinebutton = () => {


const ages =['18+' , '45+']
const payment = ['Free' , 'Paid']
const dosage = ['First Dose']


const [ageVerify , setAgeVerify] = useState("18+")
const [paymentVerify , setPaymentVerify] = useState("Free")

const newstyles ='vaccine-card'

  return (
       <div className='vaccine-buttons'>

     
       {ages.map((agebtn,index) => (
        <label className={ newstyles + `${ageVerify === agebtn ? " vaccine-border-btn ":""}` } key={index} >
        <input type="radio" onChange={(e)=>{setAgeVerify(e.target.value)}} value={agebtn} name='agbtn' /> 
        {agebtn}
        </label>
        )
    )}


     
{payment.map((paymentbtn,index) => (
  <label className={ newstyles + `${paymentVerify === paymentbtn ? " vaccine-border-btn ":""}` } key={index} >
  <input type="radio"  onChange={(e)=>{setPaymentVerify(e.target.value)}}  value={paymentbtn} name='paybtn' /> 
  {paymentbtn}
  </label>
  )
)}


{dosage.map((items,index) => (
  <label className='vaccine-card vaccine-border-btn' key={index} >
  <input type="radio"/> {items}
  </label>
  )
)}


    </div>
  )
}

export default Vaccinebutton