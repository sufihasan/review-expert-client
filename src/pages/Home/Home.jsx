import React from 'react';
import Slider from './Slider';
import MeetPartner from './MeetPartner';
import AboutOurs from './AboutOurs/AboutOurs';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Hero></Hero>
            <AboutOurs></AboutOurs>
            <MeetPartner></MeetPartner>
        </div>
    );
};

export default Home;