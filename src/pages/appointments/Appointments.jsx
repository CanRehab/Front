import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import App from '../../components/app/App';
import Counter from '../../components/counter/Counter';

const Appointments = () => {
  return (
    <div>
      <Header/>
      <Title allm="Appointments" welcome=" Welcome to MedicalApp" />
      <h5 className='titlemes'>Appointments</h5>
      <App />
      <Counter/>
      <Footer/>
    </div>
  )
}

export default Appointments
