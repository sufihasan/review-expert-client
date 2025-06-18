import React, { use } from 'react';
import { useFormatDate } from '../../hooks/useFormatDate';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const MyReviewCard = ({ myReviewCreatedByPromise }) => {
    const myreviews = use(myReviewCreatedByPromise);
    const { formatDateToDMY } = useFormatDate();
    return (
        <div>

            <h1 className='text-center'>Total Review: {myreviews.length}</h1>
            <div>
                {myreviews.length > 0 ?
                    myreviews.map(myReview => <div key={myReview._id} className="card w-full bg-base-100 shadow-xl my-4">
                        <div className="card-body">
                            <p className='text-2xl font-semibold'>Service Title: {myReview.serviceTitle}</p>
                            {/* <div className="flex items-center gap-3">
                                <img className="w-10 rounded-full mr-2" src={myReview.reviewerPhoto} alt="" />
                                <h2 className="card-title">{myReview.reviewerName}</h2>

                            </div> */}
                            <p>Date: {formatDateToDMY(myReview.reviewDate)}</p>
                            <p>Review: {myReview.reviewText}</p>
                            <Rating
                                emptySymbol={<FaRegStar className="text-2xl text-yellow-400" />}
                                fullSymbol={<FaStar className="text-2xl text-yellow-400" />}
                                initialRating={myReview.rating}
                                readonly
                            // onChange={(rate) => setRating(rate)}
                            />
                            <div className='space-x-3'>
                                <button className='btn btn-primary'>Update</button>
                                <button className='btn btn-secondary'>Delete</button>
                            </div>
                        </div>
                    </div>) : <p className="p-4 text-xl">0 review</p>
                }
            </div>

        </div>
    );
};

export default MyReviewCard;