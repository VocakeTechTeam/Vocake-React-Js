import { IconProps } from '../../types';
export const CorrectIcon = ({
    width = '24px',
    height = '24px',
    color = 'black',
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="40" cy="40" r="40" fill="white" />
            <path
                d="M55 32.5L35.2067 51.3278C34.8136 51.7017 34.194 51.694 33.8103 51.3103L25.5 43"
                stroke={color}
                stroke-width="10"
                stroke-linecap="round"
            />
        </svg>
    );
};
