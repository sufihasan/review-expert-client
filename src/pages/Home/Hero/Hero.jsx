import { div } from 'motion/react-client';
import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className='w-11/12 mx-auto mt-15'>
            <div
                className="hero rounded"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/wVtLXTB/rev4.jpg)",
                }}
            >
                <div className="hero-overlay rounded"></div>
                <div className="hero-content text-neutral-content text-center py-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">We're Review Expert</h1>
                        <p className="mb-5">
                            People can review service. It is very secure platform for
                            review services. Join with us for find best services.
                        </p>
                        <Link to='/register'>
                            <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;