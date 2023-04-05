import React from 'react'
import './box.css';


const Box = ({imgUrl, drname, linew, textm, lineh,textv}) => {
  return (
    <div className='box'>
    <div className='boxc'>
    <img className='imgUrl' src={imgUrl} alt="image" />
         <p className='drname' >{drname}</p>
         <div className='linew' > {linew}</div>
         <p className='textm'> {textm} </p>
         <div className='lineh'> {lineh}</div>
         <p className='textv'>{textv}</p>
   </div>

   </div>
  )
}

export default Box
