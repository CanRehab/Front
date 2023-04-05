import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import Appt from '../../components/appt/Appt';
import Counter from '../../components/counter/Counter';

const Appointmentst = () => {
  return (
    <div>
      <Header/>
      <Title allm="Appointments" welcome=" Welcome to MedicalApp" />
      <h5 className='titlemes'>Appointments</h5>
      <Appt />
      <Counter/>
      <Footer/>
    </div>
  )
}

export default Appointmentst;