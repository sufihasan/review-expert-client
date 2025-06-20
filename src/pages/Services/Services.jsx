import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';

const Services = () => {
    const loadedServices = useLoaderData();
    console.log(loadedServices);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl text-pink-700 text-center'>All services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                {
                    loadedServices.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;