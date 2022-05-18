import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'



const Info = () => {
    
    return (
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 
        '>
            <InfoCard cardText='Lorem Ipsum is simply dummy text of the pri' cardTitle='opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardText='Brooklyn, NY 10036, United States' cardTitle='Visit Our Location' bgClass='bg-accent' img={marker}></InfoCard>
            <InfoCard cardText='+000 123 456789' cardTitle='Contact us Now' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;