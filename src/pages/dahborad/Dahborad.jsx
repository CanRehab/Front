import React from 'react';
import './dahborad.css';
import userimg from '../../assets/pich.jpeg';
import im1 from '../../assets/im1.jpeg';
import im2 from '../../assets/im2.jpeg';
import im3 from '../../assets/im3.jpeg';
import im4 from '../../assets/im4.jpeg';
import dayimg from '../../assets/day.jpeg';
import Title from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Section from '../../components/section/Section'


const Dahborad = () => {

  return (
    <div className='dahborad'>

      <Header />

      <Title allm="Hello" welcome=", Welcome here." />

      <Section />
      
      <div className='dahborad-box'>
        <div className='right-top'>
          <p className='namep'> Patient Information </p>
          <img className='imgp' src={userimg} />
          <p className='info'> Ingredia Nutrisha </p>
          <p className='emailp'> info@paint.com </p>
          <p className='par'> +91 987 654 4524</p>
        </div>

        <div className='right-bottom'>
          <a className='yo'> Your Appointments </a>
          <a className='info2'> Consultation Dr. Abraham Pigeon clinic.</a>
          <img className='dayimg' src={dayimg} />
        </div>

        <div className='left-sec'>
          <img className='imgp2' src={userimg} />
          <a className='in'> Ingredia Nutrisha </a>
          <a className='mi'> 05 Min </a>

          <p className='sy'>Symptoms</p>
          <p className='sm'>A small river named Duden flows by their place and supplies it with the necessary regelialia
            is a paradisematic country, in which roasted parts of sentences fly into your mouth.Even the
            all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of
            Grammar. </p>
          <p className='di'>Diagnosis</p>
          <p className='ev'>Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however
            a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

          <img className='im1' src={im1} />
          <img className='im3' src={im3} />
          <a className='pr'> Prescription </a>
          <a className='pe'> Prescription.pdf </a>
          <a className='ja'> 28 Jan 2022 </a>

          <img className='im2' src={im2} />
          <img className='im4' src={im4} />
          <a className='re'>Results</a>
          <a className='te'>Tests.pdf</a>
          <a className='ja2'>28 Jan 2022</a>

        </div>
      </div>
      <Footer />
    </div>


  )
}

export default Dahborad
