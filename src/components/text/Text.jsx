import React from 'react';
import './text.css';

const Text = ({titlep , textp}) => {
  return (
    <div>
       <div className='lpline'></div>
         <h5 className='titlep'> {titlep} </h5>
         <h6 className='textp'> {textp} </h6>
       </div>
  )
}

export default Text
