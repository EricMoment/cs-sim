import React from "react";
import './Introduction.css'

function Introduction() {
  return (
    <div className="introduction">
      <h1>Chaos Scroll Simulator</h1>
      <div className="cs-briefing">
        <h3>What is Chaos Scroll?</h3>
        <h4>
          &nbsp;&nbsp;&nbsp;&nbsp;Chaos Scroll 60%(CS) in Dream MS modifies an equipment to better or worse. 
          Upon passing, the equipment's stats can add any value between -5 and +5.
          Enchanting with CS is risky, but it is the only way to make certain parts on equipment stronger, 
          as these parts, such as shoes and rings, do not have scrolls which increase weapon attack or magic attack. 
        </h4>
        <h4>
          &nbsp;&nbsp;&nbsp;&nbsp;Try rolling as high attack value as possible!
        </h4>
      </div>
    </div>
  )
}

export default Introduction