import axios from 'axios';
import { UserReigster } from '../types';

export const api_v1 = axios.create({
    baseURL: `${process.env.REACT_APP_VOCAKE_API}/api/v1/`,
});

api_v1.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('vocake_access_token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const enhanceServcie = async (word:string, text:string) => {
    try {
        const response = await api_v1.post('customer/vocake/enhance-text', {
            text: 'The sun is getteing more sunshin',
            word: 'Sun',
            keySecret: 'NO',
        });

        if (response.status === 200) {
            return response.data.payload;
        } else {
            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error enhancing text:', error);
        return error;
    }
};

export const signUpService = async (userRegister: UserReigster) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_VOCAKE_API}/api/v1/customer/register`,
            userRegister,
        );
        if (response.status == 200) {
            return true;
        }
    } catch (error) {
        return error;
    }
};

export const verifyOtpService = async (
    userRegister: UserReigster,
    otp: string,
) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_VOCAKE_API}/api/v1/customer/verify-otp?otp=${otp}`,
            userRegister,
        );
        if (response.data.payload.token) {
            return response.data.payload.token;
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
};
