import React, { useState } from "react";
import "./Registration.style.css";

import Status from "../Status/Status";

import Identification from "../Identification/Identification";
import Dropdown from "../Vaccine/DropDown/Dropdown";
import Appointment from "../Appointment/Appointment";

const Registration = () => {

  const [count, setCount] = useState(0);


  //lifting the state up , receiving selected center from dropdown
  const [centerDetails, setCenterDetails] = useState();
  const selectedCenter = (center) => {
    setCenterDetails(center);
  };




  return (
    <div className="reg-wrap">
      <div className="reg">
        <h2 className="reg-h">Registration</h2>
      </div>

      {count === 0 && (
        <Status
          counter="/images/Ellipse 2.png"
          counter1="/images/Ellipse 2.png"
        />
      )}
      {count === 1 && (
        <Status counter="/images/tick.png" counter1="/images/Ellipse 2.png" />
      )}
      {count === 2 && (
        <Status counter="/images/tick.png" counter1="/images/tick.png" />
      )}

      {count === 0 ? <Identification /> : null}

      {count === 1 ? <Dropdown selection={selectedCenter} /> : null}

      {count === 2 ? <Appointment userSelected={centerDetails} /> : null}

      {count === 3 ? setCount(0) : null}

      <div className="reg-btn-wrap">
        {count !== 2 && (
          <button className="reg-btn" onClick={() => setCount(count + 1)}>
            Next
          </button>
        )}
        {count === 2 && (
          <button className="reg-btn" onClick={() => setCount(count)}>
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default Registration;
