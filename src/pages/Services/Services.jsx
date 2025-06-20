import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';

const Services = () => {
    const loadedServices = useLoaderData();
    console.log(loadedServices);

    // Keep track of the search input or selected category
    const [category, setCategory] = useState('');

    // Filter the services by the category
    const filteredServices = loadedServices.filter(service => {
        return category === ''
            ? true
            : service.category?.toLowerCase().includes(category.toLowerCase());
    });

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl text-pink-700 text-center'>All services</h1>
            {/* Search by category input */}
            <div className='my-5 flex justify-center'>
                <input
                    type='text'
                    placeholder='Search by category'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className='input input-bordered w-full max-w-xs'
                />
            </div>

            {/* Category */}
            <fieldset className="fieldset">
                {/* <legend className="fieldset-legend">Category</legend> */}
                <select name="category" className="input w-full" defaultValue="">
                    <option value="" disabled >— Select a category —</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Painting">Painting</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Appliance">Appliance</option>
                </select>
            </fieldset>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                {/* {
                    loadedServices.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                } */}
                {filteredServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}

                {filteredServices.length === 0 && (
                    <p className='col-span-3 text-center text-gray-500'>
                        No services match this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Services;