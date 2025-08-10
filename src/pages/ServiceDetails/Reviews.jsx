

import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useFormatDate } from '../../hooks/useFormatDate';

const Reviews = ({ reviews }) => {

    const { formatDateToDMY } = useFormatDate();

    return (
        <div>
            {/* <h1>{reviews.length}</h1> */}
            <div>
                {reviews.length > 0 ?
                    reviews.map(review => <div key={review._id} className="card w-full bg-base-100 dark:bg-gray-700
                    dark:text-gray-200 shadow-xl my-4">
                        <div className="card-body">
                            <div className="flex items-center gap-3">
                                <img className="w-10 rounded-full mr-2" src={review.reviewerPhoto} alt="" />
                                <h2 className="card-title">{review.reviewerName}</h2>

                            </div>
                            <p>Date: {formatDateToDMY(review.reviewDate)}</p>
                            <p>Review: {review.reviewText}</p>
                            <Rating
                                emptySymbol={<FaRegStar className="text-2xl text-yellow-400" />}
                                fullSymbol={<FaStar className="text-2xl text-yellow-400" />}
                                initialRating={review.rating}
                                readonly
                            // onChange={(rate) => setRating(rate)}
                            />
                        </div>
                    </div>) : <p className="p-4 text-xl">0 review</p>
                }
            </div>
        </div>
    );
};

export default Reviews;