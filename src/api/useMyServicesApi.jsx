import axios from 'axios';
import React from 'react';

const useMyServicesApi = () => {

    const myServicesCreatedByPromise = email => {
        return axios.get(`https://ass11-b-ele-server-ser.vercel.app/services/myService?email=${email}`)
            .then(res => res.data);
    }

    return {
        myServicesCreatedByPromise
    }



};

export default useMyServicesApi;