import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    // const [errorMessage, setErrorMessage] = useState('');
    const { createUser, updateUser, setUser } = use(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, name, photo, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const newUser = result.user;
                //user update
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        // console.log('user update successfully');
                        setUser({ ...newUser, displayName: name, photoURL: photo });
                        //navigate to home or desire

                        Swal.fire({
                            icon: "success",
                            title: "Register Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate(location?.state || '/');
                    }).catch(error => {
                        console.log('error in userUpdate', error);
                        // setUser(newUser);
                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className='md:flex justify-center items-center'>

                <div className='p-2 md:p-0 md:w-[30%]'>
                    <div className="card bg-base-100 mt-5 
                        mx-auto w-full max-w-sm
                        shrink-0 shadow-xl">
                        <div className="card-body">

                            <h1 className="text-3xl text-primary text-center font-bold">Register Now</h1>

                            <form onSubmit={handleRegister} className='fieldset'>
                                {/* name  */}
                                <label className="label">Name</label>
                                <input required name='name' type="text" className="input" placeholder="Name" />

                                {/* photo */}
                                <label className="label">Photo Url</label>
                                <input required name='photo' type="text" className="input" placeholder="Photo Url" />

                                {/* email */}
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>

                                {/* password */}
                                <div className='relative'>

                                    <input
                                        required
                                        name='password'
                                        // type={showPass ? 'text' : 'password'}
                                        type='password'
                                        className="input"
                                        placeholder="Password" />

                                    {/* <span
                                    onClick={() => { setShowPass(!showPass) }}
                                    className='btn btn-xs border-0 absolute top-2 right-6'>
                                    {
                                        showPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />
                                    }


                                </span> */}

                                </div>

                                {/* {errorMessage && <p className='text-red-500 text-xs'>{errorMessage}</p>} */}



                                <button className="btn btn-neutral mt-4">Register</button>


                            </form>

                            {/* <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                            <FcGoogle size={20}></FcGoogle>
                            Login with Google
                        </button> */}
                            <p>Already Have an Account please <Link className='underline text-blue-500' to='/login'>Login</Link></p>

                        </div>
                    </div>
                </div>

                <div>
                    <img className='w-[60%]' src="https://i.ibb.co/fV6czHCT/register.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Register;