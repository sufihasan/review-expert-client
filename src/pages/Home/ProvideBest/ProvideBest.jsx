import React from 'react';
import { useCountUp } from 'react-countup';

const ProvideBest = ({ totalServices, totalReviews, totalUsers }) => {
    useCountUp({
        ref: 'counter',
        end: totalUsers,
        enableScrollSpy: true,
        scrollSpyDelay: 500,
    });
    useCountUp({
        ref: 'counter2',
        end: totalReviews,
        enableScrollSpy: true,
        scrollSpyDelay: 500,
    });
    useCountUp({
        ref: 'counter3',
        end: totalServices,
        enableScrollSpy: true,
        scrollSpyDelay: 500,
    });

    return (
        <div className="hero  mt-10">

            <div className="hero-content">
                <div className="">

                    <h1 className="text-5xl font-bold text-center">We Provide to find Best
                        Services</h1>
                    <p className="py-6 text-center text-gray-500">
                        Everyday here many new sarvice added. People add review. That help to find best service.
                    </p>
                    <div className='flex gap-10 justify-center'>
                        <div className='bg-base-200 rounded-full shadow-xl border border-gray-200 py-10  px-20'>
                            <img className='w-20 h-20' src="https://i.ibb.co/V09Xw8hc/userbgrv.png" alt="" />
                            <h2 className='my-2 text-5xl font-bold'><span id="counter"></span>+</h2>
                            <p className='text-gray-500'>Total User</p>
                        </div>
                        <div className='bg-base-200 rounded-full shadow-xl border border-gray-200 py-10  px-20'>
                            <img className='w-20 h-20' src="https://i.ibb.co.com/x8JyPhYn/successreview.png" alt="" />
                            <h2 className='my-2 text-5xl font-bold'><span id="counter2"></span>+</h2>
                            <p className='text-gray-500'>Total Reviews</p>
                        </div>
                        <div className='bg-base-200 rounded-full shadow-xl border border-gray-200 py-10  px-20'>
                            <img className='w-20 h-20' src="https://i.ibb.co/1J05bJ1x/servicebgrv.png" alt="" />
                            <h2 className='my-2 text-5xl font-bold'><span id="counter3"></span>+</h2>
                            <p className='text-gray-500'>Total Services</p>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProvideBest;