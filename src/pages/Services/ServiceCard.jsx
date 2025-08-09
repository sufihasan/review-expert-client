import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
    const { ServiceImage, ServiceTitle, description, price, category, date, _id } = service;

    function formatDateToDMY(isoDate) {
        const date = new Date(isoDate);
        const d = String(date.getDate()).padStart(2, '0');
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const y = date.getFullYear();
        return `${d}-${m}-${y}`;
    }

    const modifiedData = formatDateToDMY(date); // "16-06-2025"

    const truncateText = (text, maxWords) => {
        const words = text.split(" ");
        return words.length > maxWords
            ? words.slice(0, maxWords).join(" ") + "..."
            : text;
    }

    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={ServiceImage}
                    className='w-full h-48'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {ServiceTitle}
                    {/* badge-secondary */}
                    {/* <div className="badge bg-blue-500 text-white ml-3">{modifiedData}</div> */}
                </h2>
                <p className='text-justify'>{truncateText(description, 18)}</p>

                {/* <div className="card-actions justify-between items-center">
                    <div className='flex gap-3'>
                        <p ><span className='font-semibold'>Category</span>: {category}</p>
                        <p ><span className='font-semibold'>Price</span>: {price}</p>
                    </div>

                    <Link to={`/serviceDetails/${_id}`}>
                        <div className="btn btn-outline hover:bg-blue-500 hover:text-white">See Details</div>
                    </Link>
                </div> */}
                <div className='flex items-center'>
                    <p ><span className='font-semibold'>Price</span>: {price}</p>

                    <Link to={`/serviceDetails/${_id}`}>
                        <div className="btn btn-outline hover:bg-blue-500 hover:text-white">See Details</div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;