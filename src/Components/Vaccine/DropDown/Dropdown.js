import React, { useEffect, useState } from 'react'
import './Dropdown.css'
import axios from 'axios'
import Vaccinebutton from '../VaccineButton/Vaccinebutton'




const Dropdown = (props) => {


  //states dropdown

  //list of  states from api is stored here
  const [stateDropDown, setStateDropDown] = useState([])

  //selected state based on state-id is stored here
  const [selectedState, setSelectedState] = useState()

  useEffect(() => {
    axios
      .get("https://cdndemo-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => {
        setStateDropDown(res.data.states)
      })
  }, [])


  //state selection function
  const stateHandler = (event) => {
    //console.log(event.target.value) ,  here value is state-id 
    setSelectedState(event.target.value)
  }




  //disrict dropdown

  //list of district from api  is stored here
  const [districtDropDown, setDistrictDropDown] = useState([])
//selected district based on district id is stored here
  const [selectedDistrict, setSelectedDistrict] = useState()


  useEffect(() => {
    axios
      .get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedState ? selectedState : "1"}`)
      .then((res) => {
        setDistrictDropDown(res.data.districts)
      })
  }, [selectedState])



  const districtHandler = (event) => {
    setSelectedDistrict(event.target.value)
  }



  //center names
//based on district-id the center is changing
//center name based on selected district id is stored here
  const [hospitalName, setHospitalName] = useState([])
//centers that we selected is stored here
  const [selectedHospital, setSelectedHospital] = useState()


  useEffect(() => {
    axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${selectedDistrict ? selectedDistrict : "1"}&date=14-09-2021`)
      .then((res) => {
        setHospitalName(res.data.centers)
      })
  }, [selectedDistrict])





  return (


    <div className='vaccine-wrap'>

      <div className='vaccine'>
        <h3 className='vaccine-h'>Choose Vaccine Center</h3>
      </div>


      <div className='drop-down'>

        {/*state dropdown*/}

        <div className='drop-h'>
          <h4>State</h4>
          <select className='state-drop-br' onChange={stateHandler}>
            {stateDropDown.map((item) => (
              <option key={item.state_id} value={item.state_id} >{item.state_name}</option>
            )
            )}
          </select>
        </div>

        {/*district dropdown*/}

        <div className='drop-h'>
          <h4>District</h4>
          <select className='district-drop-br' onChange={districtHandler}>
            {districtDropDown.map((item) => (
              <option key={item.district_id} value={item.district_id}>{item.district_name}</option>
            )
            )}
          </select>
        </div>


        <div className='drop-h'>
          <h4>Pincode</h4>
          <select className='pincode-drop-br'>
            <option value='685567'>685561</option>
            <option value='685553'>685553</option>
          </select>
        </div>

      </div>


      <Vaccinebutton />


      <div className='vacc-heading'>
        <h4>no</h4>
        <h4>name</h4>
        <h4>covaxine</h4>
        <h4>covishield</h4>
        <h4>action</h4>
      </div>


      <div className='vacc-box'>
        {hospitalName.map((hospital, index) => (

          <div className={selectedHospital === hospital.name ? 'selected' : 'arrange'}
            key={index} onClick={() => {
              setSelectedHospital(hospital.name);
              props.selection(hospital) //passing  data from child to parent
            }}>


            <h5>{index + 1}</h5>

            <div>
              <h5 className='vax-h'>{hospital.name}</h5>
              <h5 className='vax-h'>{hospital.address}</h5>
            </div>

            <h5 className='covax-num'>15</h5>
            <h5 className='covsh-num'>80</h5>

            <h5>{hospital.name === selectedHospital ? 'selected' : "select"}</h5>
          </div>
        ))}

      </div>

    </div>


  )
}

export default Dropdown