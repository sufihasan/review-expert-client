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

        console.log(newService);

        axios.post('http://localhost:3000/services', newService)
            .then(res => {
                console.log(res.data);
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
                console.log(error);
            })

    }

    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h2 className="text-3xl text-center border-4 border-gray-300">Add a New Service</h2>


            {/* form section */}
            <div className='md:w-3/4 mx-auto my-6'>
                <form onSubmit={handleAddService}>
                    <div className='grid grid-cols-1  mx-auto w-10/12 gap-3'>

                        {/* Service Title */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Service Title</legend>
                            <input type="text" name='ServiceTitle'
                                className="input w-full" placeholder="Enter Service Title" />
                        </fieldset>

                        {/* Category */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Category</legend>
                            <select name="category" className="input w-full" defaultValue="">
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
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Service Image</legend>
                            <input type="text" name='ServiceImage'
                                className="input w-full" placeholder="Service Image URL" />
                        </fieldset>

                        {/* Company Name--- */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Company Name</legend>
                            <input type="text" name='CompanyName'
                                className="input w-full" placeholder="Enter Company Name" />
                        </fieldset>

                        {/* Website--- */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Website</legend>
                            <input type="text" name='Website'
                                className="input w-full" placeholder="Enter Website" />
                        </fieldset>

                        {/* Price */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Price</legend>
                            <input type="text" name='price'
                                className="input w-full" placeholder="Enter Price" />
                        </fieldset>


                        {/* User Name
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">User Name</legend>
                            <input type="text" name='userName' readOnly value={user?.displayName || ''}
                                className="input w-full" placeholder="User Name" />
                        </fieldset> */}

                        {/* User Email */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">User Email</legend>
                            <input type="text" name='userEmail' readOnly value={user?.email || ''}
                                className="input w-full" placeholder="User Email" />
                        </fieldset>

                    </div>

                    {/* Description */}
                    <div className='w-10/12 mx-auto'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Description</legend>
                            {/* <input type="text" name='description'
                                className="input w-full" placeholder="Description" /> */}
                            <textarea name='description'
                                className="textarea w-full" placeholder="Description"></textarea>
                        </fieldset>

                        <input type="submit" className='btn btn-primary w-1/2 mx-auto mt-3 block' value="Add Services" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddService;