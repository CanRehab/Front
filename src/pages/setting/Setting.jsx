import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import pich from '../../pich.jpeg';
import './setting.css';

const setting = () => {
  return (
    <div>
    <Header/>
    <Title allm="All Setting" welcome="Welcome to MedicalApp" />
    <h5 class="titlemes">SETTING</h5>
    <div class="rightmessages">
    <h5 class="rmtext">All Setting</h5>

    <div class="rsbox1">
        <h6 class="rsname">Username:</h6>
        <h6 class="rscont">Ingredia Nutrisha</h6>
    </div>

    <div class="rsbox2">
        <h6 class="rsname">Password</h6>
        <h6 class="rscont">**********</h6>
        <a href="Setting.html" class="rsbox2text">change</a>
    </div>

    <div class="rsbox3">
        <h6 class="rsname">Phone number:</h6>
        <h6 class="rscont">+91 987 654 4524 </h6>
    </div>

    <div class="rsbox4">
        <h6 class="rsname">Loction:</h6>
        <h6 class="rscont">Palestine- Gaza</h6>
    </div>

    <div class="rsbox5">
        <h6 class="rsname">Date of birth</h6>
        <h6 class="rscont">18 May .1989</h6>
    </div>

    <div class="rsbox6">
        <h6 class="rsname">Email:</h6>
        <h6 class="rscont">info@patient.co</h6>
    </div>


</div>


<div class="leftmessages">
    <img class="lsimg" src={pich} />
    <h6 class="lsname">Ingredia Nutrisha</h6>
    <h4 class="lstitel">Change password</h4>

    <div class="lsinput1">
        <label class="lslabel">Old password :</label>
        <input  class="lsinput" />
    </div>

    <div class="lsinput2">
    <label class="lslabel">New password :</label>
    <input class="lsinput" />
    </div>

    <div class="lsinput3">
    <label class="lslabel">Confirm password :</label>
    <input class="lsinput" />
    </div>

    <a class="lsup">Update</a>
</div>
    <Footer />
    </div>
  )
}

export default setting