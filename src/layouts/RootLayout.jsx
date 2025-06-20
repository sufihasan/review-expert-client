import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-468px)]'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;