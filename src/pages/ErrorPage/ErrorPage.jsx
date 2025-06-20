import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>

            <div className='text-center mt-14'>
                <img className='mx-auto' src="https://i.ibb.co/wrS1hBRh/pagenotfound3.jpg" alt="" />
                {/* <h3 className='mt-5 text-red-600 text-2xl font-semibold'>404 - Page Not Found</h3> */}
                <p className='my-3'>Oops! The page you are looking for does not exits</p>
                <Link to='/'>
                    <button className='btn bg-blue-500 text-white'>Go Back Home</button>

                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;