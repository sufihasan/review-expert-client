import React from 'react';
import useAuth from '../../hooks/useAuth';

const UpdateServiceModal = ({
    handleUpdateServiceSubmit,
    oldMyservice
}) => {
    const { user } = useAuth();
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box  max-w-xl dark:bg-gray-800 dark:text-gray-200">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* form section */}
                    <div className='w-3/4 mx-auto my-6'>
                        <form onSubmit={(e) => handleUpdateServiceSubmit(e, oldMyservice?._id)}>
                            <div className='grid grid-cols-1  mx-auto w-10/12 gap-3 '>

                                {/* Service Title */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend dark:text-gray-200">Service Title</legend>
                                    <input key={oldMyservice._id} type="text" name='ServiceTitle' defaultValue={oldMyservice?.ServiceTitle}
                                        className="input w-full dark:bg-gray-700" placeholder="Enter Service Title" />
                                </fieldset>

                                {/* Category */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend dark:text-gray-200">Category</legend>
                                    <select key={oldMyservice._id} name="category" className="input w-full dark:bg-gray-700" defaultValue={oldMyservice?.category}>
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
                                    <legend className="fieldset-legend dark:text-gray-200">Service Image</legend>
                                    <input key={oldMyservice._id} type="text" name='ServiceImage' defaultValue={oldMyservice?.ServiceImage}
                                        className="input w-full dark:bg-gray-700" placeholder="Service Image URL" />
                                </fieldset>

                                {/* Company Name--- */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend dark:text-gray-200">Company Name</legend>
                                    <input key={oldMyservice._id} type="text"
                                        name='CompanyName' defaultValue={oldMyservice?.CompanyName}
                                        className="input w-full dark:bg-gray-700" placeholder="Enter Company Name" />
                                </fieldset>

                                {/* Website--- */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend dark:text-gray-200">Website</legend>
                                    <input key={oldMyservice._id} type="text"
                                        name='Website' defaultValue={oldMyservice?.Website}
                                        className="input w-full dark:bg-gray-700" placeholder="Enter Website" />
                                </fieldset>

                                {/* Price */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend dark:text-gray-200">Price</legend>
                                    <input key={oldMyservice._id} type="text"
                                        name='price' defaultValue={oldMyservice?.price}
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
                                        className="input w-full dark:bg-gray-700" placeholder="User Email" />
                                </fieldset>

                            </div>

                            {/* Description */}
                            <div className='w-10/12 mx-auto'>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend dark:text-gray-200">Description</legend>
                                    {/* <input type="text" name='description'
                                className="input w-full" placeholder="Description" /> */}
                                    <textarea name='description' defaultValue={oldMyservice?.description} key={oldMyservice._id}
                                        className="textarea w-full dark:bg-gray-700" placeholder="Description"></textarea>
                                </fieldset>

                                <input type="submit" className='btn btn-primary w-1/2 mx-auto mt-3 block' value="Update Service" />
                            </div>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateServiceModal;