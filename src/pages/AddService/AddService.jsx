import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {
    const { user } = use(AuthContext)

    const handleAddService = (e) => {
        e.preventDefault();

        const form = e.target;
        const formdata = new FormData(form);
        const newService = Object.fromEntries(formdata.entries());

        // const now = new Date();
        // console.log(now); // Mon Jun 16 2025 18:30:00 GMT+0600 (BD time)
        // console.log(now.toISOString()); // 2025-06-16T12:30:00.000Z

        newService.date = new Date().toISOString();

        // console.log(newService);

        axios.post('https://ass11-b-ele-server-ser.vercel.app/services', newService)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({

                        icon: "success",
                        title: "Your Service has been Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // console.log(error);
            })

    }

    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h2 className="text-3xl text-center dark:text-gray-200 py-2 border-4 border-gray-300 dark:border-gray-400">Add a New Service</h2>


            {/* form section */}
            <div className='md:w-3/4 mx-auto my-6 dark:text-gray-200'>
                <form onSubmit={handleAddService}>
                    <div className='grid grid-cols-1  mx-auto w-10/12 gap-3'>

                        {/* Service Title */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend dark:text-gray-200">Service Title</legend>
                            <input type="text" name='ServiceTitle'
                                className="input w-full dark:bg-gray-700" placeholder="Enter Service Title" />
                        </fieldset>

                        {/* Category */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend dark:text-gray-200">Category</legend>
                            <select name="category" className="input w-full dark:bg-gray-700 dark:text-gray-400" defaultValue="">
                                <option value="" disabled >— Select a category —</option>
                                <option value="Cleaning">Cleaning</option>
                                <option value="Electricity">Electricity</option>
                                <option value="Painting">Painting</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Carpentry">Carpentry</option>
                                <option value="Appliance">Appliance</option>
                            </select>
                        </fieldset>


                        {/* Service Image */}
                        <fieldset className="fieldset ">
                            <legend className="fieldset-legend dark:text-gray-200">Service Image</legend>
                            <input type="text" name='ServiceImage'
                                className="input w-full dark:bg-gray-700" placeholder="Service Image URL" />
                        </fieldset>

                        {/* Company Name--- */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend dark:text-gray-200">Company Name</legend>
                            <input type="text" name='CompanyName'
                                className="input w-full dark:bg-gray-700" placeholder="Enter Company Name" />
                        </fieldset>

                        {/* Website--- */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend dark:text-gray-200">Website</legend>
                            <input type="text" name='Website'
                                className="input w-full dark:bg-gray-700" placeholder="Enter Website" />
                        </fieldset>

                        {/* Price */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend dark:text-gray-200">Price</legend>
                            <input type="text" name='price'
                                className="input w-full dark:bg-gray-700" placeholder="Enter Price" />
                        </fieldset>


                        {/* User Name
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">User Name</legend>
                            <input type="text" name='userName' readOnly value={user?.displayName || ''}
                                className="input w-full" placeholder="User Name" />
                        </fieldset> */}

                        {/* User Email */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend dark:text-gray-200">User Email</legend>
                            <input type="text" name='userEmail' readOnly value={user?.email || ''}
                                className="input w-full dark:bg-gray-700 dark:text-gray-400" placeholder="User Email" />
                        </fieldset>

                    </div>

                    {/* Description */}
                    <div className='w-10/12 mx-auto'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend dark:text-gray-200">Description</legend>
                            {/* <input type="text" name='description'
                                className="input w-full" placeholder="Description" /> */}
                            <textarea name='description'
                                className="textarea w-full dark:bg-gray-700" placeholder="Description"></textarea>
                        </fieldset>

                        <input type="submit" className='btn border-0 hover:bg-blue-600 bg-blue-500 text-white w-1/2 mx-auto mt-3 block' value="Add Services" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddService;