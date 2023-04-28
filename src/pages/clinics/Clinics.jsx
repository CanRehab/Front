import React from 'react';
import Title from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Box from '../../components/box/Box';
import Counter from '../../components/counter/Counter';
import Section from '../../components/section/Section';
import { Link } from 'react-router-dom';
import i1 from '../../assets/i1.jpeg';
import i2 from '../../assets/i2.jpeg';
import i3 from '../../assets/i3.jpeg';
import i4 from '../../assets/i4.jpeg';
import i5 from '../../assets/i5.jpeg';
import i6 from '../../assets/i6.jpeg';
import i7 from '../../assets/i7.jpeg';
import i8 from '../../assets/i8.jpeg';
import i9 from '../../assets/i9.jpeg';
import i10 from '../../assets/i10.jpeg';
import './clinics.css'

const Clinics = () => {
  return (
    <div className='clinics'>

      <Header />
      <Title allm="Clinics" welcome=" Welcome to Medical WebSite" />

      <Section />

      <div className='clinics-box'>
        <div className='address'>
          <h5> All Clinics </h5>
          <h6> Show of Member 12/20 </h6>
        </div>

        <div className='group-container'>
          <div className='groupa'>
            <Box imgUrl={i1} drname="Dr.Abraham Pigeon" linew="" lineh="" />
            <Box imgUrl={i2} drname="Dr.Petek Karagöz" linew="" textm="Message" lineh="" textv="View Clinics" />
            <Box imgUrl={i3} drname="Dr.Indigo Violet" linew="" textm="Message" lineh="" textv="View Clinics" />
            <Box imgUrl={i4} drname="Dr. Abraham Pigeon " linew="" textm="Message" lineh="" textv="View Clinics" />
            <Box imgUrl={i5} drname="Dr.Druid Wensleydale" linew="" textm="Message" lineh="" textv="View Clinics" />
          </div>

          <div className='groupb'>
            <Box imgUrl={i6} drname="Dr.Quiche Hollandaise" linew="" textm="Message" lineh="" textv="View Clinics" />
            <Box imgUrl={i7} drname="Dr.Lurch Schpellchek" linew="" textm="Message" lineh="" textv="View Clinics" />
            <Box imgUrl={i8} drname="Dr.Suzanna Schnitzel" linew="" textm="Message" lineh="" textv="View Clinics" />
            <Box imgUrl={i9} drname="Dr.Bartholomew Shoe" linew="" textm="Message" lineh="" textv="View Clinics" />
            <Box imgUrl={i10} drname="Dr.Hermann P. Schnitzel" linew="" textm="Message" lineh="" textv="View Clinics" />
          </div>

          <Link className='msg' to="/messages" > Message</Link>
          <Link className='vp' to="/profildoct" > View Clinics</Link>

        </div>


        <Counter />
      </div>
      <Footer />
    </div>
  )
}

export default Clinics