import React, { use, useState } from 'react';
import { useFormatDate } from '../../hooks/useFormatDate';
import Swal from 'sweetalert2';

const MyServiceCard = ({ myServicesCreatedByPromise }) => {
    const myServices = use(myServicesCreatedByPromise);
    const [showServices, setShowServices] = useState(myServices);
    const { formatDateToDMY } = useFormatDate();


    // review delete start
    const handleServiceDelete = (id) => {
        console.log('delete service', id);

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

                fetch(`http://localhost:3000/services/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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

    return (
        <div className=''>
            <h1 className='text-center text-gray-500'>Total Service: {showServices.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
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
                            showServices?.map((myService, index) => <tr>
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

                                        <button className="btn join-item">Update</button>
                                        <button onClick={() => handleServiceDelete(myService._id)} className="btn join-item">Delete</button>

                                    </div>

                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyServiceCard;