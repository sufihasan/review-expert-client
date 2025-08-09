import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';

const Services = () => {
    const loadedServices = useLoaderData();
    // console.log(loadedServices);

    //  search input or selected category
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // '', 'asc', 'desc'


    const filteredServices = loadedServices.filter((service) => {
        const matchesCategory = category === '' || service.category === category;
        const matchesSearch =
            searchTerm === '' ||
            service.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.category?.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Sort filteredServices by price
    const sortedServices = [...filteredServices].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if (sortOrder === 'desc') {
            return b.price - a.price;
        } else {
            return 0; // no sorting
        }
    });

    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h1 className='text-3xl  text-center'>All services</h1>
            <div className='flex mt-3 flex-col md:flex-row items-center justify-center gap-3'>
                {/* Search by category input */}
                <div className=' w-full mx-auto md:mx-0 max-w-xs'>
                    <input
                        type='text'
                        placeholder='Search by category'
                        value={searchTerm}
                        onChange={e => {
                            setCategory('');
                            setSearchTerm(e.target.value);
                        }}
                        className='input input-bordered w-full'
                    />


                </div>

                {/* Category dropdown */}
                <fieldset className="fieldset w-full mx-auto md:mx-0 max-w-xs">
                    {/* <legend className="fieldset-legend">Category</legend> */}
                    <select
                        value={category}
                        onChange={(e) => {
                            setSearchTerm('');
                            setCategory(e.target.value);
                        }}
                        className="input w-full "
                    >
                        <option value="">— All categories —</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Painting">Painting</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Carpentry">Carpentry</option>
                        <option value="Appliance">Appliance</option>
                    </select>
                </fieldset>

                {/* Sort dropdown */}
                <fieldset className="fieldset w-full mx-auto md:mx-0 max-w-xs">
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="input w-full"
                    >
                        <option value="">Sort by price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </fieldset>

            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5'>

                {sortedServices.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}

                {sortedServices.length === 0 && (
                    <p className='col-span-3 text-center text-gray-500'>
                        No services match this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Services;