import React from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Dahborad from './pages/dahborad/Dahborad';
import Forgot from './pages/forgot/Forgot';
import Clinics from './pages/clinics/Clinics';
import Messages from './pages/messages/Messages';
import Profildoct from './pages/profildoct/Profildoct';
import Setting from './pages/setting/Setting';
import Appointments from './pages/appointments/Appointments';
import Appointmentst from './pages/appointmentst/Appointmentst';

function App() {
  return (
    <div >
    <Routes>
    <Route path='/' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/forgot' element={<Forgot />} />
    <Route path='/dahborad' element={<Dahborad />} />
    <Route path='/clinics' element={<Clinics />} />
    <Route path='/messages' element={<Messages />} />
    <Route path='/profildoct' element={<Profildoct />} />
    <Route path='/setting' element={<Setting />} />
    <Route path='/appointments' element={<Appointments />} />
    <Route path='/appointmentst' element={<Appointmentst />} />
    </Routes>
    </div>
  );
};

export default App;
