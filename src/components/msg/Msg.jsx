import React from 'react';
import './msg.css';
import imgm1 from '../../assets/imgm1.jpeg';
import imgm2 from '../../assets/imgm2.jpeg';
import imgm3 from '../../assets/imgm3.jpeg';
import imgm4 from '../../assets/imgm4.jpeg';
import imgm5 from '../../assets/imgm5.jpeg';
import imgm6 from '../../assets/imgm6.jpeg';
import imgm7 from '../../assets/imgm7.jpeg';
import imgm8 from '../../assets/imgm8.jpeg';

const Msg = () => {
    return (
        <div className='msg-box'>
            <div class="rmbox1">
                <img class="rmimg" src={imgm1} />
                <h6 class="rmname">Daher</h6>
                <h6 class="rmtime">04 Min</h6>
            </div>

            <div class="rmbox2"> <img class="rmimg2" src={imgm2} />
                <h6 class="rmname">Ameer</h6>
                <h6 class="rmtime">05 Min</h6>
            </div>

            <div class="rmbox3"> <img class="rmimg" src={imgm3} />
                <h6 class="rmname">Bassam</h6>
                <h6 class="rmtime">09 Min</h6>
            </div>

            <div class="rmbox4"> <img class="rmimg" src={imgm4} />
                <h6 class="rmname">Fadi</h6>
                <h6 class="rmtime">12 Min</h6>
            </div>

            <div class="rmbox5"> <img class="rmimg" src={imgm5} />
                <h6 class="rmname">Sarah</h6>
                <h6 class="rmtime">14 Min</h6>
            </div>

            <div class="rmbox6"> <img class="rmimg" src={imgm6} />
                <h6 class="rmname">Nael</h6>
                <h6 class="rmtime">18 Min</h6>
            </div>

            <div class="rmbox7"> <img class="rmimg" src={imgm7} />
                <h6 class="rmname">Wael</h6>
                <h6 class="rmtime">21 Min</h6>
            </div>

            <div class="rmbox8"> <img class="rmimg" src={imgm8} />
                <h6 class="rmname">Bader</h6>
                <h6 class="rmtime">23 Min</h6>
            </div>
        </div>
    )
}

export default Msg