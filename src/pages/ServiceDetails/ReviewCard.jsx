import React, { use } from 'react';

const ReviewCard = ({ myReviewCreatedByPromise }) => {
    const myreviews = use(myReviewCreatedByPromise);
    return (
        <div>
            <h1>{myreviews.length}</h1>
        </div>
    );
};

export default ReviewCard;