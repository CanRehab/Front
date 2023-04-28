import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import Settingbox from '../../components/settingbox/Settingbox';
import Section from '../../components/section/Section';
import pich from '../../assets/pich.jpeg';
import { Link } from 'react-router-dom'
import './setting.css';

const setting = () => {
    return (
        <div className='setting'>
            <Header />
            <Title allm="All Setting" welcome="Welcome to MedicalApp" />

            <Section />
            <h5 class="titlemes">SETTING</h5>
            <div class="rightmessages">
                <h5 class="rmtext">All Setting</h5>


                <div class="rsbox1">
                    <Settingbox rsname="Username:" rscont="Ingredia Nutrisha" />
                </div>

                <div class="rsbox2">
                    <Settingbox rsname="Password:" rscont="**********" />
                    <Link class="rsbox2text" to="/setting">Change</Link>
                </div>

                <div class="rsbox3">
                    <Settingbox rsname="Phone number:" rscont="+91 987 654 4524" />
                </div>

                <div class="rsbox4">
                    <Settingbox rsname="Loction:" rscont="Palestine- Gaza" />
                </div>

                <div class="rsbox5">
                    <Settingbox rsname="Date of birth" rscont="18 May .1989" />
                </div>

                <div class="rsbox6">
                    <Settingbox rsname="Email:" rscont="info@patient.co" />
                </div>


            </div>


            <div class="leftmessages">
                <img class="lsimg" src={pich} />
                <h6 class="lsname">Ingredia Nutrisha</h6>
                <h4 class="lstitel">Change password</h4>

                <div class="lsinput1">
                    <label class="lslabel">Old password :</label>
                    <input class="lsinput" />
                </div>

                <div class="lsinput2">
                    <label class="lslabel">New password :</label>
                    <input class="lsinput" />
                </div>

                <div class="lsinput3">
                    <label class="lslabel">Confirm password :</label>
                    <input class="lsinput" />
                </div>


                <Link class="lsup" to="/setting">Update</Link>

            </div>
            <Footer />
        </div>
    )
}

export default setting