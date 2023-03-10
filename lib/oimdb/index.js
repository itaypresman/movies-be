const axios = require('axios');
const Config = require('@moovies/config');
const OimDbError = require('./errors/index.js');


const axiosInstance = axios.create({
    baseURL: Config.oimDbUrl,
    params: {
        apikey: Config.oimDbToken,
    },
});

axiosInstance.interceptors.response.use(
    response => {
        if (response?.data?.Response === 'False') {
            throw OimDbError.notFound();
        }

        return response;
    },
    error => {
        return Promise.reject(error);
    }
);


module.exports = axiosInstance;
