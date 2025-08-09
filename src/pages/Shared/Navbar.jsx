import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { user, userLogout } = use(AuthContext);

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

    const links = <>
        <li className='text-xl'>
            <NavLink
                className={({ isActive }) => isActive ? 'text-white  font-semibold rounded   bg-blue-500' : ''}
                to='/'>Home</NavLink>
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
        <div className=" bg-base-100    shadow-xl sticky top-0 z-50">
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
                        <img className='w-30 hidden md:flex' src='https://i.ibb.co.com/Z6jvt4r6/navlogobl.png' alt="logo" />
                        <p className="md:text-3xl md:hidden font-bold ml-3 text-xl">Review<span className='text-primary'>Expert</span></p>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end space-x-2">

                    <label className="input w-40 hidden md:flex">
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