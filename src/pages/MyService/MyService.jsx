import React, { Suspense } from 'react';
import useMyServicesApi from '../../api/useMyServicesApi';
import MyServiceCard from './MyServiceCard';
import useAuth from '../../hooks/useAuth';

const MyService = () => {
    const { user, loading } = useAuth();
    const { myServicesCreatedByPromise } = useMyServicesApi();

    return (
        <div className='w-11/12 mx-auto mt-3'>
            <h1 className='text-2xl text-center font-semibold'>My services</h1>
            {
                loading ? <h1>Loading....</h1> : <Suspense fallback={'waiting..'}>
                    <MyServiceCard
                        myServicesCreatedByPromise={myServicesCreatedByPromise(user?.email)}
                    ></MyServiceCard>
                </Suspense>
            }

        </div>
    );
};

export default MyService;