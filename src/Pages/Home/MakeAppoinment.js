import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const MakeAppoinment = () => {
    return (
      <section style={{
          background: `url(${appoinment})`
      }} className='flex justify-center items-center'>
          <div className='flex-1 hidden  lg:block' >
         <img className='mt-[-130px]' src= {doctor} alt="" />
          </div>
          <div className='flex-1 '>
              <h2 className='text-xl text-primary'>Appointment</h2>
              <h2 className='text-white text-4xl pt-3'>Make an Appoinment today</h2>
              <p className='text-white my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas, ad ab sit suscipit quidem maiores nihil aliquid. Ullam quas explicabo similique qui ex atque officia inventore, itaque, veritatis debitis accusantium omnis illum architecto exercitationem voluptates, perspiciatis et ut magni?</p>
              <Button>Get Started</Button>
          </div>
      </section>
    );
};

export default MakeAppoinment;