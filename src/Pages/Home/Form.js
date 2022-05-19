import React from 'react';
import appoinment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const Form = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} > 
            <div className='text-center py-12'>
                <h2 className='text-primary text-xl'>Contact us</h2>
                <h2 className='text-white text-3xl'>Stay conneted with us</h2>
            
            </div>
            <div className=' mb-28'>
                <form action="" className='text-center'>
                   
                    <input className='mb-3 px-28 py-2 text-left rounded-xl' type="email" name="" id=""  placeholder='your email'/><br />
                    <input  className='mb-3 px-28 py-2 rounded-xl' type="text" name="" id="" placeholder='subject' /><br />
                    <textarea  className='mb-3 px-3 rounded-xl py-2' name="" id="" cols="50" rows="8" placeholder='type message'></textarea><br />
                </form>
                <div className='pb-10 text-center'>
                    <Button >Submit</Button>
                </div>
            </div>
        </section>
    );
};

export default Form;