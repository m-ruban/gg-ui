import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const ShareAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9V11ZM17 9C16.4477 9 16 9.44772 16 10C16 10.5523 16.4477 11 17 11V9ZM11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15H11ZM12 3L12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L12 3ZM8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711C8.68342 7.09763 9.31658 7.09763 9.70711 6.70711L8.29289 5.29289ZM14.2929 6.70711C14.6834 7.09763 15.3166 7.09763 15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289L14.2929 6.70711ZM7 9H6.8V11H7V9ZM4 11.8V19H6V11.8H4ZM7 22H17V20H7V22ZM20 19V11.8H18V19H20ZM17.2 9H17V11H17.2V9ZM13 15V3H11V15H13ZM11.2929 2.29289L8.29289 5.29289L9.70711 6.70711L12.7071 3.70711L11.2929 2.29289ZM11.2929 3.70711L14.2929 6.70711L15.7071 5.29289L12.7071 2.29289L11.2929 3.70711ZM20 11.8C20 10.2536 18.7464 9 17.2 9V11C17.6418 11 18 11.3582 18 11.8H20ZM17 22C18.6569 22 20 20.6569 20 19H18C18 19.5523 17.5523 20 17 20V22ZM4 19C4 20.6569 5.34315 22 7 22V20C6.44772 20 6 19.5523 6 19H4ZM6.8 9C5.2536 9 4 10.2536 4 11.8H6C6 11.3582 6.35817 11 6.8 11V9Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default ShareAlt;
