/* eslint-disable no-console */
import { API_ADDRESS, API_TIMEOUT } from '@/config';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.timeout = API_TIMEOUT;
axios.defaults.withCredentials = true;

axios.interceptors.response.use((response) => response.data, (error) => {
    if (!error.response) {
        // Network issues.
        console.log(error);
    } else if (error.response.status >= 500) {
        // Server problem.
        console.log(error);
    } else {
        // Other error.
        console.log(error);
    }

});

export default axios;
