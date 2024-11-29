export interface IconProps {
    width?: string;
    height?: string;
    color?: string;
}

export type UserReigster = {
    email: string | null;
    password: string | null;
    password_retry: string | null;
    fullName: string | null;
    phoneNumber: string | null;
    locations: string | null;
    role: string | null;
    levelUser: string | null;
    keySecret: string | null;
};
