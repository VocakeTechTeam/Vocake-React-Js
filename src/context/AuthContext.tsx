import { createContext, ReactNode, useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
type AUTHCONTEXTYPE = {
    isAuth: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AUTHCONTEXTYPE>({} as AUTHCONTEXTYPE);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const token = localStorage.getItem('vocake_access_token');
        console.log('token: ', token);
        if (token !== null) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_VOCAKE_API}/api/v1/login`,
                {
                    email: email,
                    password: password,
                    role: 'CUSTOMER',
                },
            );
            if (res.data.payload.token !== null) {
                localStorage.setItem(
                    'vocake_access_token',
                    res.data.payload.token,
                );
                setIsAuth(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const logout = async () => {
        localStorage.removeItem('vocake_access_token');
        setIsAuth(false);
    };
    if (loading) return <>...loading</>;
    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
};
