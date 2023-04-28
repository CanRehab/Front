import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import Appt from '../../components/appt/Appt';
import Section from '../../components/section/Section'
import './appointmentst.css';

const Appointmentst = () => {
  return (
    <div className='appointmentst'>
      <Header/>
      <Title allm="Appointments" welcome=" Welcome to MedicalApp" />

<Section />
      <div className='appointmentst-box'>
      <h5 className='titlemes'>Appointments</h5>
      <Appt />
      </div>
      <Footer/>
    </div>
  )
}

export default Appointmentst;