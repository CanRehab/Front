import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './messages.css';
import Title from '../../components/title/Title';
import i1 from '../../assets/i1.jpeg';
import pich from '../../assets/pich.jpeg';
import Msg from '../../components/msg/Msg';
import Section from '../../components/section/Section';

const Messages = () => {
  return (
    <div className='messages'>

    <Header />
    <Title allm="All MESSAGES" welcome="Welcome to MedicalApp" />

<Section />
    <h5 class="titlemes">MESSAGES</h5>

    <div class="rightmessages">
        <h5 class="rmtext">All Messages</h5>
        <Msg />
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
