

import React, { use } from 'react';

const Reviews = ({ reviewsPromise, newReview }) => {
    const reviews = use(reviewsPromise);
    // const [finalReview, setfinalReview] = useState(reviews);
    // setfinalReview([newReview, ...reviews]);
    console.log(reviews);
    return (
        <div>
            <h1>{reviews.length}</h1>
            <div>
                {reviews.length > 0 ?
                    reviews.map(review => <div key={review._id} className="card w-full bg-base-100 shadow-xl my-4">
                        <div className="card-body">
                            <div className="flex">
                                <img className="w-10 rounded-full mr-2" src={review.reviewerPhoto} alt="" />
                                <h2 className="card-title">{review.reviewerName}</h2>
                            </div>
                            <p>Review: {review.reviewText}</p>
                        </div>
                    </div>) : <p className="p-4 text-xl">0 review</p>
                }
            </div>
        </div>
    );
};

export default Reviews;