import React from 'react';
import Slider from './Slider';
import MeetPartner from './MeetPartner';
import AboutOurs from './AboutOurs/AboutOurs';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Slider></Slider>
            <AboutOurs></AboutOurs>
            <MeetPartner></MeetPartner>
        </div>
    );
};

export default Home;