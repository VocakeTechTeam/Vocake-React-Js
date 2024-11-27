import React from 'react';
import { IconProps } from '../../types';
const FlagIcon = ({
    width = '24px',
    height = '24px',
    color = 'black',
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.7672 18.6883V3.58333C14.7672 3.16341 14.6067 2.76068 14.3209 2.46375C14.0352 2.16681 13.6476 2 13.2434 2H8.65067C7.9299 2 7.34629 2.60721 7.34629 3.35533C7.34629 4.10425 6.7619 4.71067 6.0419 4.71067H3.52381C3.11967 4.71067 2.73208 4.87748 2.44631 5.17441C2.16054 5.47135 2 5.87407 2 6.294V10.8065C2 11.2264 2.16054 11.6292 2.44631 11.9261C2.73208 12.223 3.11967 12.3898 3.52381 12.3898H8.1219C8.52604 12.3898 8.91363 12.223 9.1994 11.9261C9.48517 11.6292 9.64571 11.2264 9.64571 10.8065V10.6205C9.64571 10.2005 9.80626 9.7978 10.092 9.50087C10.3778 9.20394 10.7654 9.03712 11.1695 9.03712H15.0019"
                stroke={color}
                stroke-width="2.5"
            />
        </svg>
    );
};

export default FlagIcon;