import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import Loading from '../pages/Loading/Loading';

const RootLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-468px)]'>
                {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </div>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;