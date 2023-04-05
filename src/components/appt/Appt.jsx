import React from 'react';
import './appt.css';
import iconapp from '../../iconapp.jpeg'

const Appt = () => {
  return (

    <div className='appbox'>

    <img className='iconapp' src={iconapp} />
    <h6 className='apptitle'>Thanks for booking! </h6>

    <h6 className='apptext1'> You booked an appointment with </h6>
    <h6 className='apptext2'> Dr. Abraham Pigeon Dr. Abraham
        Pigeon clinic:</h6>
        <h6 className='apptext3'> 17 November 2023 at 11 AM </h6>

</div>
  )
}

export default Appt
