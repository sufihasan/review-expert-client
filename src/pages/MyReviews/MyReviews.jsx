import React, { Suspense } from 'react';
import useMyReviewApi from '../../api/useMyReviewApi';
import MyReviewCard from './MyReviewCard';
import useAuth from '../../hooks/useAuth';
import Loading from '../Loading/Loading';

const MyReviews = () => {
    const { user, loading } = useAuth();
    // console.log(user.email);
    const email = user?.email;

    const { myReviewCreatedByPromise } = useMyReviewApi();

    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h1 className='text-2xl font-semibold text-center'>My All Reviews</h1>
            {loading ? <Loading></Loading> : <Suspense fallback={<Loading></Loading>}>
                <MyReviewCard
                    myReviewCreatedByPromise={myReviewCreatedByPromise(email)}
                ></MyReviewCard>
            </Suspense>}

        </div>
    );
};

export default MyReviews;