import React, { useState } from 'react';
import img13 from "../img/img-4.png"
import img14 from "../img/trophy-shape.png"
import "../Achievement/style.css"
import imgp4 from "../img/img-8.jpg"

export default function Achievement() {

  
  return (
    <>
    
  
    <section>
        <div className='container'>
        <div className="section-header margin-olpo position-relative">
                <h2 className="title ">
                    <span className="shape"><span className='abo'>My</span></span> <span>Achievement</span>
                </h2>
            </div>
<div className='row'>
<div className='col-lg-6' data-aos="flip-left">
   <div className='position-relative'>
   <img src={imgp4}alt="" className='w-100'/>
   {/* <div className='abs'>
<img src={img14} alt="" className=''/>

</div> */}
   </div>
</div>
<div className='col-lg-6 '>
    <div className='content'>
        <p>Played 8 matches and scored 5 goals during her first stint (2018–2020).
Contributed to the team's success in Serie A, aiding Juventus in securing top positions.
Loan Spells:</p>
        <p>Hellas Verona (2020–2021): Gained essential first-team experience.
Empoli (2021–2022): Continued her development as a forward.
Sassuolo (2022): Showcased her skills in Serie A with impactful performances.
Pomigliano (2023): Scored goals and further enhanced her match experience.
Sampdoria (2023): Scored a pivotal goal against Juventus, demonstrating her ability to perform in crucial matches.
Return to Juventus (2024):</p>
    </div>
    <div className="counter-wrapper d-flex flex-wrap mb-1 mb-md-3">
  <div className="counter-item">
    <div className="counter-header">
      <h2 className="title odometer fs-2" >
      34
      </h2>
    </div>

    <h4 className="subtitle">Matches</h4>
  </div>
  <div className="counter-item">
    <div className="counter-header">
      <h2 className="title odometer fs-2" >
      34
      </h2>
    </div>

    <h4 className="subtitle">Player of Year</h4>
  </div>
  <div className="counter-item">
    <div className="counter-header">
      <h2 className="title odometer fs-2" >
      2

      </h2>
    </div>

    <h4 className="subtitle">Goals</h4>
  </div>
</div>
        
<div>

    </div>
</div>

</div>
        </div>
    </section>
    
    </>
  )
}
