import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import imgfor from '../../imgfor.jpeg';
import logo from '../../logo.jpeg';
import Content from '../../components/content/Content'; 
import './forgot.css';

const Forgot = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: ""
  })
  const [data,setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
      // console.log(e.target.value);


      const { value, name } = e.target;
      // console.log(value,name);


      setInpval(() => {
          return {
              ...inpval,
              [name]: value
          }
      })

  }
  const addData = (e) => {
    e.preventDefault();

    const getuserpass = localStorage.getItem("useryoutube");
    console.log(getuserpass);


    const { email } = inpval;
     if (email === "") {
         alert('email field is requred',{
        });
    } else if (!email.includes("@")) {
         alert('plz enter valid email addres',{
        });
   } if (getuserpass && getuserpass.length) {
    const userdata = JSON.parse(getuserpass);
    const userforgot = userdata.filter((el) => {
        return el.email === email
    });
    if (userforgot.length === 0) {
        alert("invalid messages")
    } else {
        console.log("user forgot succesfulyy");
        localStorage.setItem("user_forgot", JSON.stringify(userforgot))
        history("/messages")
    }
}

}

  return (
    <div>
    <div class="img">
    <img src={imgfor} />
</div>

<div class="container">

    <img class="logoforgot" src={logo} />

    <h5 class="titleforgot">
        Enter your email and we send you a password reset link.
    </h5>


    <input type="text" placeholder="Email" id="emailforgot" onChange={getdata} required/>
    <button type="submit" id="inputforgot"  onClick={addData} >
     <NavLink to="/setting">
       Send request
     </NavLink>
    </button>

    <Content endpage="Terms of use. Privacy policy" />
    </div>

    </div>
  )
}

export default Forgot