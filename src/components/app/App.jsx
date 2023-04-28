import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

const App = () => {
    return (
        <div className='appbox'>
            <h6 className='appboxtext'>NEAREST ALAN PETERSON SLOTS</h6>
            <div className='appboxsel1'>
                <h6 className='appboxseltitle'> Nov 17</h6>
                <div className="appboxslb1">
                    <Link className='appboxsel1text' to="/appointmentst" > 11 AM</Link>
                </div>
                <div className='appboxslb2'>
                    <h6 className='appboxsel1text'>1 PM </h6>
                </div>
                <div className='appboxslb3'>
                    <h6 className='appboxsel1text'>3 PM </h6>
                </div>
                <div className='appboxslb4'>
                    <h6 className='appboxsel1text'>4 PM </h6>
                </div>
                <div className='appboxslb5'>
                    <h6 className='appboxsel1text'>11 AM </h6>
                </div>
            </div>
            <div className='appboxsel2'>
                <h6 className='appboxseltitle'> Nov 23</h6>
                <div className="appboxslb1">
                    <h6 className='appboxsel1text'>10 AM </h6>
                </div>
                <div className='appboxslb2'>
                    <h6 className='appboxsel1text'>11 AM </h6>
                </div>
            </div>
            <div className='appboxsel3'>
                <h6 className='appboxseltitle'> Nov 25</h6>
                <div className="appboxslb1">
                    <h6 className='appboxsel1text'>9 AM </h6>
                </div>
                <div className='appboxslb2'>
                    <h6 className='appboxsel1text'>10 AM </h6>
                </div>
                <div className='appboxslb3'>
                    <h6 className='appboxsel1text'>11 AM </h6>
                </div>
            </div>
        </div>
    )
}

export default App
