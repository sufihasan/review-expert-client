import React, { use, useState } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signinUser, setUser, googleSignIn } = use(AuthContext);
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setErrorMessage('');

        signinUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                navigate(location.state || '/');
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage('Invalid email or password. Please try again.');
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                // console.log(result);
                setUser(result.user);

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: result?.user?.email,
                        displayName: result?.user?.displayName || '',

                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.message || 'User saved or exists');
                    })
                    .catch(err => console.error('Error saving user:', err));

                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location.state || '/');
            }).catch(error => {
                console.log(error);
                // setErrorMessage(error.code);
            })
    }


    return (
        <div>
            <div className='md:flex justify-center items-center'>

                <div className='p-2 md:p-0 mt-8 md:mt-16 w-full md:w-[30%]'>
                    <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl text-primary text-center font-bold">Login now!</h1>
                            <form onSubmit={handleLogin} className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Email" />

                                {/* password */}
                                <label className="label">Password</label>
                                <input required name='password' type="password" className="input" placeholder="Password" />

                                <div >
                                    <a className="link link-hover">Forgot password?</a>
                                </div>

                                {errorMessage && <p className='text-red-500 text-xs'>{errorMessage}</p>}
                                <button className="btn btn-neutral mt-4">Login</button>

                            </form>
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                <FcGoogle size={20}></FcGoogle>
                                Login with Google
                            </button>
                            <p>New to this website please <Link className='underline text-blue-400' to='/register'>Register</Link></p>

                        </div>
                    </div>
                </div>

                <div className='hidden md:flex'>
                    <img className='w-96' src="https://i.ibb.co/BK6YZFMH/login.jpg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Login;