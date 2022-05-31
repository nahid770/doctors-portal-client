import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Form from './Form';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <MakeAppoinment></MakeAppoinment>
           <Testimonials></Testimonials>
           <Form></Form>
           <Footer></Footer>
        </div>
    );
};

export default Home;