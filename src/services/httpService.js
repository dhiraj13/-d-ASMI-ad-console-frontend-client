import axios from 'axios';
import logger from './logService';
import { getFromLocalStorage, setToLocalStorage } from '../helpers/localstorage';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

// request interceptor to add the Authentication Token header to requests
axios.interceptors.request.use(
    (config) => {
        const accessToken = getFromLocalStorage("accessToken")
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        let refreshToken = getFromLocalStorage("refreshToken");

        if (refreshToken && error.response.statusCode === 401 && originalRequest._retry) {
            originalRequest._retry = true;
            const res = await axios.post(`${BASE_URL}/auth/refresh_token`, { refreshToken: refreshToken });
            setToLocalStorage("accessToken", res.data.accessToken);
            logger.log("Access Token Refreshed!");
            return await axios(originalRequest);
        }
        return Promise.reject(error);
    }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}