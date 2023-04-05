import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Content from "../../components/content/Content";
import imgsignin from '../../imgsignin.jpeg';
import logo from '../../logo.jpeg';
import './login.css';


const Login = () =>{

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        username: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { username, password } = inpval;
        if (username === "") {
            alert(' username field is requred!',{
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
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el) => {
                    return el.username === username && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid dahborad")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/dahborad")
                }
            }
        }
    }

    return (
    <div>
     <div class="img">
    <img src={imgsignin} />
     </div>

    <div class="container">
        <img class="logologin" src={logo} />
          <h5 class="titlelogin">
            Welcome bake! please login to your account.
          </h5>


          <form method="post" action="../logindb">
             <input name='username' onChange={getdata} placeholder="Username" className="usernamelogin" />
             <input name='password' onChange={getdata}  className="passwordlogin" placeholder="Password"/>
                

          <div class="logininputs">
             <input type="checkbox" className="remember-box" />
             <h6 className="remember"> Remember me. </h6>

             <h6 className="forgotpassword"> <NavLink to="/forgot">Forgot Password?</NavLink></h6>
                 
             <button type="submit" className="inputlogin" onClick={addData}>Login</button>
             <button type="submit" className="inputsignuplog"><NavLink to="/"> <h6> Sign Up</h6></NavLink> </button>

          </div>

            <Content endpage="Terms of use. Privacy policy" />
            </form>
                
    </div>
            
        </div>
    )
}
export default Login;
