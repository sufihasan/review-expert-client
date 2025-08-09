import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import MeetPartner from './MeetPartner';
import AboutOurs from './AboutOurs/AboutOurs';
import Hero from './Hero/Hero';
import ServiceCard from '../Services/ServiceCard';
import { useLoaderData } from 'react-router';
import ProvideBest from './ProvideBest/ProvideBest';

const Home = () => {
    const latestFeaturedServices = useLoaderData();

    const [totalServices, setTotalServices] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [loading1, setLoading1] = useState(true);

    // for  all services length
    useEffect(() => {
        fetch("https://ass11-b-ele-server-ser.vercel.app/summary")
            .then((res) => res.json())
            .then((data) => {
                setTotalServices(data.totalServices);
                setTotalReviews(data.totalReviews);
                setTotalUsers(data.totalUsers);
                setLoading1(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading1(false); // NEW
            });
    }, []);



    return (
        <div className=' '>

            <Slider></Slider>
            <section className='mt-10'>
                <h1 className='text-center text-3xl font-semibold mb-5'>Latest Service</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-11/12 mx-auto'>
                    {
                        latestFeaturedServices.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>

            </section>


            <Hero></Hero>
            <AboutOurs></AboutOurs>
            {loading1 ? (
                <h2>Loading total services...</h2>
            ) : (
                <ProvideBest
                    totalServices={totalServices}
                    totalReviews={totalReviews}
                    totalUsers={totalUsers}
                ></ProvideBest>
            )}

            <MeetPartner></MeetPartner>
        </div>
    );
};

export default Home;