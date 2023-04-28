import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import App from '../../components/app/App';
import Section from '../../components/section/Section'
import './appointments.css';


const Appointments = () => {
  return (
    <div className='appointments'>
      <Header />
      <Title allm="Appointments" welcome=" Welcome to MedicalApp" />

<Section/>
      <div className='appointments-box'>
        <h5 className='titlemes'>Appointments</h5>
        <App />
      </div>

      <Footer />
    </div>
  )
}

export default Appointments
