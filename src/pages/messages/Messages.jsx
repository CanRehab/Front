import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './messages.css';
import Title from '../../components/title/Title';
import imgm1 from '../../imgm1.jpeg';
import imgm2 from '../../imgm2.jpeg';
import imgm3 from '../../imgm3.jpeg';
import imgm4 from '../../imgm4.jpeg';
import imgm5 from '../../imgm5.jpeg';
import imgm6 from '../../imgm6.jpeg';
import imgm7 from '../../imgm7.jpeg';
import imgm8 from '../../imgm8.jpeg';
import i1 from '../../i1.jpeg';
import pich from '../../pich.jpeg';



const Messages = () => {
  return (
    <div className='messages'>
    <Header />

    <Title allm="All MESSAGES" welcome="Welcome to MedicalApp" />

    <h5 class="titlemes">MESSAGES</h5>

    <div class="rightmessages">
        <h5 class="rmtext">All Messages</h5>

        <div class="rmbox1">
            <img class="rmimg" src={imgm1} />
            <h6 class="rmname">Daher</h6>
            <h6 class="rmtime">04 Min</h6>
        </div>

        <div class="rmbox2"> <img class="rmimg2" src={imgm2} />
            <h6 class="rmname">Ameer</h6>
            <h6 class="rmtime">05 Min</h6>
        </div>

        <div class="rmbox3"> <img class="rmimg" src={imgm3} />
            <h6 class="rmname">Bassam</h6>
            <h6 class="rmtime">09 Min</h6>
        </div>

        <div class="rmbox4"> <img class="rmimg" src={imgm4} />
            <h6 class="rmname">Fadi</h6>
            <h6 class="rmtime">12 Min</h6>
        </div>

        <div class="rmbox5"> <img class="rmimg" src={imgm5} />
            <h6 class="rmname">Sarah</h6>
            <h6 class="rmtime">14 Min</h6>
        </div>

        <div class="rmbox6"> <img class="rmimg" src={imgm6} />
            <h6 class="rmname">Nael</h6>
            <h6 class="rmtime">18 Min</h6>
        </div>

        <div class="rmbox7"> <img class="rmimg" src={imgm7} />
            <h6 class="rmname">Wael</h6>
            <h6 class="rmtime">21 Min</h6>
        </div>

        <div class="rmbox8"> <img class="rmimg" src={imgm8} />
            <h6 class="rmname">Bader</h6>
            <h6 class="rmtime">23 Min</h6>
        </div>

    </div>


    <div class="leftmessages">

        <h6 class="lmtime">05 Min</h6>

    <img class="lmimgd" src={i1} />
    <h5 class="lmnamed">Dr. Abraham Pigeon clinic. </h5>
    <h5 class="lmtextd">How are you? </h5>

    <img class="lmimgp" src={pich}/>
    <h5 class="lmnamep">Ingredia Nutrisha</h5>
    <h5 class="lmtextp">fine, thanl you doctor</h5>

    <input class="lminput" type="text"/>
    <button class="lmbutton"> <h6> Send </h6></button>
    </div>

     <Footer />
    </div>
  )
}

export default Messages
