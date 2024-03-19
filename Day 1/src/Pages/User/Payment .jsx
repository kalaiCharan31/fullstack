import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../../assets/css/Payment.css';
import mc from '../../assets/images/mc.png';
import vc from '../../assets/images/visa.png';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const handleProceed = () => {
        navigate('/home');
      
  };

  return (
    <div>
      <div className='pbox'></div>
      <div className='pbox1'>
        <br></br>
        <div className='ph'>Payment</div>
        <img className='con1' src={mc} alt="mc"></img>
        <img className='con2' src={vc} alt="vc"></img>
        <input className='con3' placeholder='card holder name'></input>
        <input className='con4' placeholder='card number'></input>
        <input className='con5' placeholder='exp date'></input>
        <input className='con6' placeholder='CVV'></input>
        <br></br>
        <button className='payb' onClick={handleProceed}>Proceed</button>
      </div>
    </div>
  );
}

export default Payment;
