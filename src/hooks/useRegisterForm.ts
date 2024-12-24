import React, { useState } from 'react';

export const useRegisterForm = () => {
    const [email, setEmail] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [phoneNumberError, setPhoneNumberError] = useState<string | null>(
        null,
    );

    const [city, setCity] = useState<string | null>(null);
    const [cityError, setCityError] = useState<string | null>(null);

    const [country, setCountry] = useState<string | null>(null);
    const [countryError, setCcountryError] = useState<string | null>(null);

    const [password, setPassword] = useState<string | null>(null);
    const [passwordRetry, setPasswordRetry] = useState<string | null>(null);

    const validateData = () => {};
    return {
        email,
        city,
        phoneNumber,
        country,
        passwordRetry,
        password,
    };
};
