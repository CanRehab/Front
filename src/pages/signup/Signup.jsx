
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import imgsignup from '../../assets/imgsignup.jpeg';
import logo from '../../assets/logo.jpeg';
import './signup.css';
import Content from "../../components/content/Content";

const Signup = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
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

        const { firstname, lastname, username, email, password, confirmpassword } = inpval;

        if (firstname === "") {
            alert(' firstname field is requred!',{
                position: "top-center",
            });
        } else if (lastname === "") {
            alert(' lastname field is requred!',{
                position: "top-center",
            });
        } else if (username === "") {
            alert(' username field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             alert('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             alert('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (password === "") {
             alert('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             alert('password length greater five',{
                position: "top-center",
            });
        } else if (confirmpassword !== password) {
            alert('Passwords does not match',{
               position: "top-center",
           });
       } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }





return (
<div>
        <img className="img" src={imgsignup} />

        <div className="container">
        <img className="logosignup" src={logo} />
        <div className="titlesignup">
            Please complete to create your account.
        </div>

            <form>
            
            <input placeholder="First Name" name="firstname" className="firstname" onChange={getdata} />

            <input placeholder="Last Name" name="lastname" className="lastname" onChange={getdata} />

            <input placeholder="User Name" name="username" className="username" onChange={getdata}/>

            <input placeholder="Email" name="email" className="email" onChange={getdata}/>

            <input name="password" placeholder="Password" className="password" onChange={getdata}/>
  
            <input name="confirmpassword" className="confirmpassword" placeholder="Confirm password" onChange={getdata}/>
           
            <div className='signupinputs'>
                    <input type="checkbox" className="remember-box"/>
                    <h6 className="remember">I agree with terms and conditions</h6>

                    <button variant="primary" className="inputsignup" type="submit" onClick={addData}> Sign up </button>

                  <Link className="linkbtn" to="/login">Already have an account? sign in.</Link>

                </div>
                <Content endpage="Terms of use. Privacy policy" />

            </form>
            </div>
    </div>
    )
}

export default Signup;