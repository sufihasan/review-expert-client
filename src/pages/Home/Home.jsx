import React from 'react';
import Slider from './Slider';
import MeetPartner from './MeetPartner';
import AboutOurs from './AboutOurs/AboutOurs';
import Hero from './Hero/Hero';
import ServiceCard from '../Services/ServiceCard';
import { useLoaderData } from 'react-router';

const Home = () => {
    const latestFeaturedServices = useLoaderData();
    return (
        <div>

            <Slider></Slider>
            <section>
                <h1 className='text-center text-3xl font-semibold my-5'>Latest Service</h1>
                <div className='grid grid-cols-3 gap-10 w-11/12 mx-auto'>
                    {
                        latestFeaturedServices.map(service => <ServiceCard
                            service={service}
                        ></ServiceCard>)
                    }
                </div>

            </section>


            <Hero></Hero>
            <AboutOurs></AboutOurs>
            <MeetPartner></MeetPartner>
        </div>
    );
};

export default Home;