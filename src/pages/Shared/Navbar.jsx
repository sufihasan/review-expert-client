import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { DarkContext } from '../../contexts/DarkContext';

const Navbar = () => {
    const { user, userLogout } = use(AuthContext);
    const { setDemode } = use(DarkContext);

    // test work start
    const loading = false;
    // const user = false;
    // test work end

    const handleLogout = () => {
        userLogout()
            .then(() => {
                // console.log('signout successfully');
            }).catch(error => {
                // console.log(error);
            })
    }


    // dark mode code-----
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDemode(true);
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDemode(false);
        }
    }, [darkMode, setDemode]);

    // dark mode code----

    const links = <>
        <li className='text-xl'>
            <NavLink
                className={({ isActive }) => isActive ? 'text-white  font-semibold rounded   bg-blue-500' : ''}
                to='/'>Home</NavLink>
        </li>

        <li className='text-xl'>
            <NavLink
                className={({ isActive }) => isActive ? 'text-white  font-semibold rounded   bg-blue-500' : ''}
                to='/about'>About Us</NavLink>
        </li>

        <li className='text-xl' >
            <NavLink
                className={({ isActive }) => isActive ? 'text-white  font-semibold  rounded bg-blue-500' : ''}
                to='/services'>Services</NavLink>
        </li>

        {
            user ? <>
                <li className='text-xl' >
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-white  font-semibold  rounded bg-blue-500' : ''}
                        to='/addService'>Add Service</NavLink>
                </li>

                <li className='text-xl'>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-white  font-semibold  rounded bg-blue-500' : ''}
                        to='/myService'>My Services</NavLink>
                </li>
                <li className='text-xl'>
                    <NavLink
                        className={({ isActive }) => isActive ? 'text-white  font-semibold  rounded bg-blue-500' : ''}
                        to='/myReviews'>My Reviews</NavLink>
                </li>

            </> : ''
        }


    </>

    return (
        // mx-5 mt-3
        <div className=" bg-base-100 dark:bg-gray-800 dark:text-white  shadow-xl sticky top-0 z-50">
            {/* md:w-11/12 */}
            <div className='navbar w-11/12 px-0 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className='flex'>

                        {
                            darkMode ? <img className='w-30 hidden md:flex' src='https://i.ibb.co.com/nqtDfvZx/logo69rb.png' alt="logo" />
                                : <img className='w-30 hidden md:flex' src='https://i.ibb.co.com/Z6jvt4r6/navlogobl.png' alt="logo" />

                        }
                        {/* <img className='w-30 hidden md:flex' src='https://i.ibb.co.com/Z6jvt4r6/navlogobl.png' alt="logo" /> */}
                        <p className="md:text-3xl md:hidden font-bold ml-3 text-xl">Review<span className='text-primary'>Expert</span></p>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end space-x-2">

                    <label className="input w-40 hidden md:flex dark:bg-gray-800 dark:text-white">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>


                    {/* code for dark mode */}
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                            onChange={() => setDarkMode(!darkMode)}
                            type="checkbox"
                            className="theme-controller"
                            value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {/* code for dark mode */}


                    {
                        loading ? <span className="loading loading-spinner loading-lg"></span> : user ? <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className="m-1">
                                <img
                                    className='w-12 h-12 rounded-full object-center'
                                    src={user?.photoURL}
                                    referrerPolicy='no-referrer'
                                    alt="imgs" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li className='py-3 font-semibold dark:text-black'>{user?.displayName} <br /> {user?.email}  </li>

                                <li onClick={handleLogout} className='btn text-left'>Sing out</li>
                            </ul>
                        </div> : <>
                            <Link to='/login'><button className='btn btn-xs md:btn-md btn-primary'>Login</button></Link>
                            <Link to='/register'><button className='btn btn-xs md:btn-md text-white bg-blue-500'>Register</button></Link>

                        </>
                    }



                </div>
            </div>

        </div>
    );
};

export default Navbar;