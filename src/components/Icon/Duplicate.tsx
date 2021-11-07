import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Duplicate: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11H15ZM13 17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17H13ZM17 15C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13V15ZM11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15V13ZM9 8H19V6H9V8ZM20 9V19H22V9H20ZM19 20H9V22H19V20ZM8 19V9H6V19H8ZM9 20C8.44772 20 8 19.5523 8 19H6C6 20.6569 7.34315 22 9 22V20ZM20 19C20 19.5523 19.5523 20 19 20V22C20.6569 22 22 20.6569 22 19H20ZM19 8C19.5523 8 20 8.44772 20 9H22C22 7.34315 20.6569 6 19 6V8ZM9 6C7.34315 6 6 7.34315 6 9H8C8 8.44772 8.44772 8 9 8V6ZM5 4H15V2H5V4ZM4 15V5H2V15H4ZM6 16H5V18H6V16ZM16 5V6H18V5H16ZM2 15C2 16.6569 3.34315 18 5 18V16C4.44772 16 4 15.5523 4 15H2ZM15 4C15.5523 4 16 4.44772 16 5H18C18 3.34315 16.6569 2 15 2V4ZM5 2C3.34315 2 2 3.34315 2 5H4C4 4.44772 4.44772 4 5 4V2ZM15 14V11H13V14H15ZM13 14V17H15V14H13ZM14 15H17V13H14V15ZM14 13H11V15H14V13Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default Duplicate;
