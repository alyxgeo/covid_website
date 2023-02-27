import React from 'react'
import './Identification.css'
import  { useState } from "react";

const Identification = () => {

  const style = "card";

  const verfication = ["Aadhar", "Student Id" ," Passport" , "Birth Certiicate"]
  
      const [verify , setVerify] = useState("Aadhar")
  
  

  return (

    <div> 

    <h3 className='id-Head'>Select Identification type</h3> 

    <div className='grid'>
    {verfication.map((idname , index)=> (
    <label className = {style + `${verify === idname?" border-btn ":""}`} key={index}>
    <input type="radio"  onChange={(e)=>{setVerify(e.target.value)}} name="btn" value={idname} />
    {idname}</label>
    ))}
    </div>

    <h4 className='id-Subhead'>Enter your {verify} </h4>

    <div className='id-Inwrap'> 
    <input type='text' placeholder='enter your id' className='id-input'/>
    </div>

    
    </div>
  )

}

export default Identification