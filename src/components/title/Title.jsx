import React from 'react'
import './title.css';


    const Title = ({ welcome,allm}) => (
      <div className='title'>
         <div className='top'>
           <h4 className='allm'> {allm}</h4>
           <h5 className='welcome'> {welcome} </h5>
          </div>    
      </div>
      )


export default Title;
