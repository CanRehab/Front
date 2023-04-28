import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import Text from '../../components/text/Text';
import Section from '../../components/section/Section'
import i1 from '../../assets/i1.jpeg';
import rpicon1 from '../../assets/rpicon1.jpeg';
import rpicon2 from '../../assets/rpicon2.jpeg';
import './profildoct.css';


const Profildoct = () => {
    return (
        <div className='profildoc'>
            <Header />
            <Title allm="Clinics" welcome=" Welcome to Medical WebSite" />

            <Section />
            <div className="address">
                <h5 > Dr. Abraham PigeonDr. Abraham Pigeon clinic</h5>
            </div>

            <div className='rightprofil'>
                <h4> Why choose Dr. Abraham Pigeon clinic? </h4>
                <div className='rpbox'>
                    <img className='rpi' src={i1} />
                    <h6 className='rpdname'>Dr. Samir</h6>
                    <h6 className='rpjob'>Physical Therapy</h6>
                    <h6 className='rpemail'>info@doctors.co</h6>

                    <div className='rpline'></div>

                    <h6 className='rpbtext'>Speciality</h6>
                    <img className='rpicon' src={rpicon1} />
                    <h6 className='rpicontext'>Orthopedician Specialist</h6>
                    <h6 className='rpicontextt'>Certified</h6>
                    <img className='rpicon2' src={rpicon2} />
                    <h6 className='rpicontext2'>Orthopedician Products </h6>
                    <h6 className='rpicontextt2'>Medications Laser Helmets </h6>
                    <img className='rpicon3' src={rpicon2} />
                    <h6 className='rpicontext3'>Orthopedician Surgery</h6>
                </div>
            </div>
            <div className='leftprofil'>


                <div className='lp1'>
                    <Text titlep=' More experience' textp='The million patients we treat each year prepares us to treat the one who matters most — you. ' />
                </div>

                <div className='lp2'>
                    <Text titlep='The right answers' textp='Count on our experts to deliver an accurate diagnosis and the right plan for you the first time. ' />
                </div>

                <div className='lp3'>
                    <Text titlep='You come first' textp='Treatment at Mayo Clinic is a truly human experience. Youre cared for as a person first.' />
                </div>

                <div className='lp4'>
                    <Text titlep=' Innovation with impact' textp='All of our patient care, education and research are driven to make discoveries that can help heal you.' />
                </div>

                <div className='lpbox'>
                    <Link className='lpboxtext' to="/appointments" > Book an appointments</Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profildoct