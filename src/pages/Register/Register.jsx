import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import Navbar from '../Shared/Navbar';
import { DarkContext } from '../../contexts/DarkContext';

const Register = () => {
    // const [errorMessage, setErrorMessage] = useState('');
    const { createUser, updateUser, setUser } = use(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const { dmode } = use(DarkContext); // for dark mode
    const navigate = useNavigate();
    const location = useLocation();


    let bgColor;
    let textColor;
    if (dmode) {
        bgColor = 'black';
        textColor = 'white';
    }
    else {
        bgColor = 'white'
        textColor = 'black'
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setErrorMessage('');
        const form = e.target;

        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(email, name, photo, password);

        // password validation
        const upperCaseRegex = /(?=.*[A-Z])/;
        if (upperCaseRegex.test(password) === false) {
            setErrorMessage('Must have an Uppercase letter in the password')
            return;
        }
        const lowerCaseRegex = /(?=.*[a-z])/;
        if (lowerCaseRegex.test(password) === false) {
            setErrorMessage('Must have a Lowercase letter in the password')
            return;
        }
        const lengthSixRegex = /.{6,}/;
        if (lengthSixRegex.test(password) === false) {
            setErrorMessage('Password length must be at least 6 character ')
            return;
        }

        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                const newUser = result.user;
                //user update
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        // console.log('user update successfully');
                        setUser({ ...newUser, displayName: name, photoURL: photo });
                        //navigate to home or desire

                        fetch('https://ass11-b-ele-server-ser.vercel.app/users', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                email: newUser.email,
                                displayName: name,

                            }),
                        })
                            .then(response => {
                                if (!response.ok) {

                                    console.error('Failed to save user to backend');
                                } else {
                                    // console.log('User saved to backend successfully');
                                }
                            })
                            .catch(error => {
                                console.error('Error while saving user to backend:', error);
                            });

                        Swal.fire({
                            icon: "success",
                            title: "Register Successfully",
                            background: bgColor,
                            color: textColor,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate(location?.state || '/');
                    }).catch(error => {
                        // console.log('error in userUpdate', error);
                        setUser(newUser);
                    })

            })
            .catch(error => {
                // console.log(error.message);
            })
    }

    return (
        <div className='dark:bg-gray-800 min-h-screen'>
            <Navbar></Navbar>
            <div className='md:flex justify-center items-center'>

                <div className='p-2 md:p-0 md:w-[50%] lg:w-[30%]'>
                    <div className="card bg-base-100 mt-5 
                        mx-auto w-full max-w-sm
                        shrink-0 shadow-xl">
                        <div className="card-body dark:bg-gray-700 dark:text-white">

                            <h1 className="text-3xl text-blue-600 text-center font-bold">Register Now</h1>

                            <form onSubmit={handleRegister} className='fieldset'>
                                {/* name  */}
                                <label className="label dark:text-gray-200">Name</label>
                                <input required name='name' type="text" className="input dark:bg-gray-600" placeholder="Name" />

                                {/* photo */}
                                <label className="label dark:text-gray-200">Photo Url</label>
                                <input required name='photo' type="text" className="input dark:bg-gray-600" placeholder="Photo Url" />

                                {/* email */}
                                <label className="label dark:text-gray-200">Email</label>
                                <input required name='email' type="email" className="input dark:bg-gray-600" placeholder="Email" />


                                <label className="label dark:text-gray-200">Password</label>

                                {/* password */}
                                <div className='relative'>

                                    <input
                                        required
                                        name='password'
                                        // type={showPass ? 'text' : 'password'}
                                        type='password'
                                        className="input  dark:bg-gray-600"
                                        placeholder="Password" />

                                    {/* <span
                                    onClick={() => { setShowPass(!showPass) }}
                                    className='btn btn-xs border-0 absolute top-2 right-6'>
                                    {
                                        showPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />
                                    }


                                </span> */}

                                </div>

                                {errorMessage && <p className='text-red-500 text-xs'>{errorMessage}</p>}



                                <button className="btn border-0 text-white bg-blue-500 mt-4">Register</button>


                            </form>

                            {/* <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                            <FcGoogle size={20}></FcGoogle>
                            Login with Google
                        </button> */}
                            <p>Already Have an Account please <Link className='underline text-blue-500' to='/login'>Login</Link></p>

                        </div>
                    </div>
                </div>

                <div className='md:w-[40%]'>
                    <img className=' lg:w-[60%] hidden md:flex' src="https://i.ibb.co/fV6czHCT/register.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Register;