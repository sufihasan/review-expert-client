import axios from 'axios';
import React from 'react';

const useMyServicesApi = () => {

    const myServicesCreatedByPromise = email => {
        return axios.get(`http://localhost:3000/services/myService?email=${email}`)
            .then(res => res.data);
    }

    return {
        myServicesCreatedByPromise
    }



};

export default useMyServicesApi;