import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div class="card-body">
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum architecto ab, quod dicta possimus quasi.</p>
          <div class=" flex items-center ">
                    <div class="avatar ">
            <div class="w-16 rounded-full ring  ring-primary ring-offset-base-100 ">
                <img src= {review.img} alt="" />
            </div>
            </div>
            <div className='pl-5 '>
                <h4 className='text-white text-2xl'> {review.name}</h4>
                <p> {review.address} </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;