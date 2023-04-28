import React from 'react';
import Logo from '../../assets/logo.jpeg';
import pich from '../../assets/pich.jpeg';
import imgicon1 from '../../assets/imgicon1.jpeg';
import imgicon2 from '../../assets/imgicon2.jpeg';
import imgicon3 from '../../assets/imgicon3.jpeg';
import imgicon4 from '../../assets/imgicon4.jpeg';
import { Link } from "react-router-dom";
import CropPortraitSharpIcon from '@mui/icons-material/CropPortraitSharp';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(current => !current)
  }

  const [imgs, setImgs] = useState(false)
  const handleImgs = () => {
    setImgs(current => !current)
  }


  return (
    <div className='header'>

      <img class="logo-header" src={Logo} alt="logo" />

      <div className='links'>
        <Link className='menu' to="/dahborad" > DAHBORD</Link>
        <Link className='menu' to="/clinics" > Clinics</Link>
        <Link className='menu' to="/appointments" > APPOINTMENTS</Link>
        <Link className='menu' to="/messages" > MESSAGES</Link>
      </div>



      <div className="leftheader">

        <button className='headericon' onClick={handleShow} > <CropPortraitSharpIcon /> </button>

        <div class="headerline"></div>

        <img class="imgpuser" src={pich} onClick={handleImgs} />


          {show &&
            <div className="iconmenu">
              <h3>Notification</h3>
              <div className='lineiconl'></div>

              <div className='boxicon1'>
                <div className='lineicon'></div>
                <img className='imgicon' src={imgicon1} />
                <h4 className='icontext'>Lee sent you a message.</h4> <h6 className='icontime'>4 min ago</h6>
              </div>

              <div className='boxicon2'>
                <div className='lineicon'></div>
                <img className='imgicon' src={imgicon2} />
                <h4 className='icontext'>Ali sent you a message.</h4> <h6 className='icontime'>4 min ago</h6>
              </div>

              <div className='boxicon3'>
                <div className='lineicon'></div>
                <img className='imgicon' src={imgicon3} />
                <h4 className='icontext'>Jehad sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
              </div>
              <div className='boxicon4'>
                <div className='lineicon'></div>
                <img className='imgicon' src={imgicon4} />
                <h4 className='icontext'>Rafat sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
              </div>
              <div className='boxicon5'>
                <div className='lineicon'></div>
                <img className='imgicon' src={imgicon1} />
                <h4 className='icontext'>hassan sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
              </div>
              <div className='boxicon6'>
                <div className='lineicon'></div>
                <img className='imgicon' src={imgicon2} />
                <h4 className='icontext'>David James sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
              </div>
              <h6 className='endicon'>View all notification</h6>
            </div>
          }

          {imgs &&
            <div className='imgmenu'>

              <div className='imgbox1'>
                <h5>Status:</h5> <h6 className='imgtext'>Online</h6>
                <div className='imgline'></div>
              </div>

              <div className='imgbox2'>
                <h6 className='imgtext'> <NavLink to="/setting"> Account setting </NavLink></h6>
                <div className='imgline'></div>
              </div>

              <div className='imgbox3'>
                <h6 className='imgtext'>Feedback</h6>
                <div className='imgline'></div>
              </div>

              <div className='imgbox4'>
                <h6 className='imgtext'> <NavLink to="/">Logout </NavLink> </h6>
                <div className='imgline'></div>
          </div> 

            </div>
          }


      </div>

    </div>
  )
}

export default Header;