import axios from 'axios';
import React from 'react';

const useMyReviewApi = () => {

    const myReviewCreatedByPromise = email => {
        return axios.get(`https://ass11-b-ele-server-ser.vercel.app/reviews/myReviews?email=${email}`)
            .then(res => res.data);
    }

    return {
        myReviewCreatedByPromise
    }
};

export default useMyReviewApi;