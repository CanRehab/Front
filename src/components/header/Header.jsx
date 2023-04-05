import React from 'react';
import Logo from '../../logo.jpeg';
import pich from '../../pich.jpeg';
import imgicon1 from '../../imgicon1.jpeg';
import imgicon2 from '../../imgicon2.jpeg';
import imgicon3 from '../../imgicon3.jpeg';
import imgicon4 from '../../imgicon4.jpeg';
import { Link } from "react-router-dom";
import CropPortraitSharpIcon from '@mui/icons-material/CropPortraitSharp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
const [show, setShow] = useState (false)
const handleShow = () => {
    setShow (current=>!current)
}

const [imgs,setImgs] = useState (false)
const handleImgs = () => {
    setImgs (current=>!current)
}
const history = useNavigate();

const userlogout = ()=>{
  localStorage.removeItem("user_login")
  history("/");
}

  return (
    <div>
    <header>
        <img class="logo-header" src={Logo} alt="logo" />
        <div className='links'>
        <Link className='menu' to="/dahborad" > Dahborad</Link>
        <Link className='menu' to="/clinics" > Clinics</Link>
        <Link className='menu' to="/appointments" > Appointments</Link>
        <Link className='menu' to="/messages" > Messages</Link>        
        </div>
<div className='sec'></div>

        <div className="leftheader">
        { show &&
            <div className="iconmenu">
              <h3>Notification</h3>
              <div className='lineiconl'></div>

            <div className='boxicon1'>
              <div className='lineicon'></div>
              <img className='imgicon' src={imgicon1}/>
              <h4 className='icontext'>Lee sent you a message.</h4> <h6 className='icontime'>4 min ago</h6>
            </div>

  
            <div className='boxicon2'>
            <div className='lineicon'></div>
            <img className='imgicon' src={imgicon2}/>
            <h4 className='icontext'>Ali sent you a message.</h4> <h6 className='icontime'>4 min ago</h6>
            </div>
                   
            <div className='boxicon3'>
            <div className='lineicon'></div>
            <img className='imgicon' src={imgicon3}/>
            <h4 className='icontext'>Jehad sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
            </div>
            <div className='boxicon4'>
            <div className='lineicon'></div>
            <img className='imgicon' src={imgicon4}/>
            <h4 className='icontext'>Rafat sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
            </div>
            <div className='boxicon5'>
            <div className='lineicon'></div>
            <img className='imgicon' src={imgicon1}/>
            <h4 className='icontext'>hassan sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
            </div>
              <div className='boxicon6'>
              <div className='lineicon'></div>
              <img className='imgicon' src={imgicon2}/>
              <h4 className='icontext'>David James sent you a mail.</h4> <h6 className='icontime'>4 min ago</h6>
            </div>
              <h6 className='endicon'>View all notification</h6>
          </div>
            }

        <button className='headericon' onClick={handleShow} > <CropPortraitSharpIcon/> </button>


            <div class="headerline"></div>

            { imgs &&
             <div className='imgmenu'>

             <div className='imgbox1'>
              <h4>Status:</h4> <h6>Online</h6>
              <div className='imgline'></div>
              </div>

              <div className='imgbox2'>
              <h6> <NavLink to="/setting"> Account setting </NavLink></h6>
              <div className='imgline'></div>
              </div>

              <div className='imgbox3'>
              <h6>Feedback</h6>
              <div className='imgline'></div>
              </div>

              <div className='imgbox4'>
             <h6 onClick={userlogout}>Logout</h6>
              <div className='imgline'></div>
              </div>
            </div>
            }
            <img class="imgpuser" src={pich} onClick={handleImgs}/>


        </div>
    </header>
    
    </div>
  )
}

export default Header;