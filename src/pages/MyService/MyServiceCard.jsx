import React, { use, useState } from 'react';
import { useFormatDate } from '../../hooks/useFormatDate';
import Swal from 'sweetalert2';
import UpdateServiceModal from './UpdateServiceModal';



const MyServiceCard = ({ myServicesCreatedByPromise }) => {
    const myServices = use(myServicesCreatedByPromise);
    const [showServices, setShowServices] = useState(myServices);
    const [oldMyservice, setOldMyService] = useState({});
    const { formatDateToDMY } = useFormatDate();
    // console.log('ok', newMyservice);


    // review delete start
    const handleServiceDelete = (id) => {
        // console.log('delete service', id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://ass11-b-ele-server-ser.vercel.app/services/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {

                            const remaingServices = showServices.filter(servc => servc._id !== id);
                            setShowServices(remaingServices);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }
    // revidew delete end

    const handleUpdateServiceClick = (myservice) => {
        setOldMyService(myservice);


        // setRating(review.rating);
        // setReviewText(review.reviewText);
        document.getElementById('my_modal_3').showModal();
    };

    const handleUpdateServiceSubmit = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateService = Object.fromEntries(formData.entries());
        // console.log('handleUpdateServiceSubmit thekay', updateService);
        // console.log('handleUpdateServiceSubmit thekay', id);

        fetch(`https://ass11-b-ele-server-ser.vercel.app/services/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateService),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    // Update review in the list
                    const updatedServices = showServices.map((servs) =>
                        servs._id === id ? { ...servs, ...updateService } : servs
                    );
                    setShowServices(updatedServices);

                    Swal.fire({
                        icon: 'success',
                        title: 'Service Updated!',
                        timer: 1500,
                        showConfirmButton: false,
                    });

                    // Optional: Close modal manually
                    document.getElementById('my_modal_3').close();
                }
            });




    }

    return (
        <div className=''>
            <h1 className='text-center text-gray-500 dark:text-gray-200'>Total Service: {showServices.length}</h1>
            <UpdateServiceModal
                handleUpdateServiceSubmit={handleUpdateServiceSubmit}
                oldMyservice={oldMyservice}
            ></UpdateServiceModal>

            {
                showServices.length > 0 ? <div className="overflow-x-auto">
                    <table className="table dark:text-gray-200">
                        {/* head */}
                        <thead>
                            <tr className='dark:text-gray-200'>
                                <th>
                                    No
                                </th>
                                <th>Name and Info</th>

                                <th>Category</th>
                                <th>Company Info</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                showServices?.map((myService, index) => <tr key={myService._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex flex-col md:flex-row items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-24 w-24">
                                                    <img className=''
                                                        src={myService?.ServiceImage}
                                                        alt="user photo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myService?.ServiceTitle}</div>
                                                <div>Price: {myService?.price}</div>
                                                <div className="text-sm opacity-50">Start at: {formatDateToDMY(myService?.date)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {myService?.category}
                                    </td>

                                    <td>
                                        <div className=''>
                                            Name: {myService?.CompanyName}

                                        </div>
                                        <div>
                                            Email: {myService?.Website}
                                        </div>
                                    </td>





                                    <th className='flex gap-2'>
                                        <div className="join join-vertical gap-2">

                                            <button onClick={() => handleUpdateServiceClick(myService)} className="btn text-white bg-blue-500 hover:bg-blue-600 join-item">Update</button>
                                            <button onClick={() => handleServiceDelete(myService._id)} className="btn btn-secondary join-item">Delete</button>

                                        </div>

                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div> : <div>
                    <p className='text-center text-warning'>You have'not added no service</p>
                </div>
            }



        </div>
    );
};

export default MyServiceCard;