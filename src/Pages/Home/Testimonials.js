import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            img: people1,
            address: "california"
        },
        {
            _id:2,
            name: 'Winson Herry',
            img: people1,
            address:" New York"
        },
        {
            _id:3,
            name: 'Winson Herry',
            img: people1,
            address:'Los Angeles'
        }
    ]
    return (
       <section className='my-28'>
           <div className='flex justify-between '>
            <div>
                <h2 className='text-xl text-primary '>Testimonial</h2>
                <h2 className='text-3xl'>What Our Patients Says</h2>
            </div>
            <div>
                <img className=' w-24 lg:w-48' src={quote} alt="" />
            </div>
           </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                reviews.map(review=><Review
                key={review._id}
                review={review}
                ></Review>)
            }
           </div>
       </section>
    );
};

export default Testimonials;