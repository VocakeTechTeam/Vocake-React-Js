import axios from 'axios';
import { UserOnboard, UserReigster } from '../types';
import { removeKeyValue } from '../utility';
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

api_v1.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('vocake_access_token');
        }
        window.location.reload();
        return Promise.reject(error);
    },
);

export const enhanceServcie = async (word: string, prompt: string) => {
    try {
        const response = await api_v1.post('customer/vocake/enhance-text', {
            prompt: prompt,
            word: word,
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

export const signUpService = async (email: string) => {
    try {
        const response = await api_v1.post(`customer/register`, {
            email: email,
            keySecret: 'CUSTOMER_REGISTER',
            role: 'CUSTOMER',
        });
        if (response.status == 200) {
            return true;
        }
    } catch (error) {
        return error;
    }
};

export const loginService = async (email: string, password: string) => {
    try {
        const response = await api_v1.post('', {
            email: email,
            password: password,
        });
        return response.data.token;
    } catch (error) {
        return null;
    }
};

export const verifyOtpService = async (email: string | null, otp: string) => {
    try {
        const response = await api_v1.post(
            `customer/verify-otp?otp=${otp}&email=${email}`,
        );
        if (response.status == 200) {
            return response.data.payload.xCodeCustomer;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
};

export const onboardService = async (userOnboard: UserOnboard) => {
    console.log(userOnboard);
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_VOCAKE_API}/api/v1/customer/onboard`,
            userOnboard,
        );
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};
