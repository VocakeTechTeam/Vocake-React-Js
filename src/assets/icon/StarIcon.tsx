import { IconProps } from '../../types';

export const StarIcon = ({
    width = '24',
    height = '24',
    color = 'black',
}: IconProps) => {
    return (
        <svg
            fill={color}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z" />
        </svg>
    );
};
