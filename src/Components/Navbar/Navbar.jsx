import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Navbar.style.css'

const Navbar = () => {
   

        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };


    return (

<div className='tabss'>
<Tabs centered value={value} indicatorColor="white"
onChange={handleChange} >
<Tab className='tabs' label="HOME" />
    <Tab className='tabs' label="Vaccine registration" />
     <Tab className='tabs' label="About" />
    <Tab className='tabs' label="Contact" />
     <Tab className='tabs' label="Sign Up" />
        </Tabs>
</div>
    );
  }
  export default Navbar