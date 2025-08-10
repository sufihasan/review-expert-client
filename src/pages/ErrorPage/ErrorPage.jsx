import React, { use, useEffect } from 'react';
import { Link } from 'react-router';
import { DarkContext } from '../../contexts/DarkContext';


const ErrorPage = () => {
    const { dmode } = use(DarkContext); // for dark mode
    // console.log(dmode);



    const root = window.document.documentElement;

    if (dmode) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        // setDemode(true);
    } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        // setDemode(false);
    }

    return (
        <div className='border min-h-screen dark:bg-gray-800'>

            <div className='text-center mt-14'>
                <img className='mx-auto' src="https://i.ibb.co/wrS1hBRh/pagenotfound3.jpg" alt="" />
                {/* <h3 className='mt-5 text-red-600 text-2xl font-semibold'>404 - Page Not Found</h3> */}
                <p className='my-3 dark:text-gray-200'>Oops! The page you are looking for does not exits</p>
                <Link to='/'>
                    <button className='btn border-0 hover:bg-blue-600 bg-blue-500 text-white'>Go Back Home</button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;