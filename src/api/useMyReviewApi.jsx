import axios from 'axios';
import React from 'react';

const useMyReviewApi = () => {

    const myReviewCreatedByPromise = email => {
        return axios.get(`http://localhost:3000/reviews/myReviews?email=${email}`)
            .then(res => res.data);
    }

    return {
        myReviewCreatedByPromise
    }
};

export default useMyReviewApi;