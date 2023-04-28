import React from 'react';
import './settingbox.css';

const Settingbox = ({rsname,rscont}) => {
  return (
    <div>
        <h6 class="rsname">{rsname}</h6>
        <h6 class="rscont">{rscont}</h6>
    </div>


  )
}

export default Settingbox