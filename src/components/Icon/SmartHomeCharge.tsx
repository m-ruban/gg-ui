import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const SmartHomeCharge: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.0069 3.6606L9.34254 2.91319L10.0069 3.6606ZM13.9931 3.6606L13.3287 4.40801L13.3287 4.40801L13.9931 3.6606ZM19.9931 8.99394L20.6575 8.24653L19.9931 8.99394ZM4.00691 8.99394L4.67127 9.74135L4.67127 9.74135L4.00691 8.99394ZM12.8682 10.9962C13.1423 10.5167 12.9757 9.90582 12.4961 9.63181C12.0166 9.3578 11.4058 9.52439 11.1318 10.0039L12.8682 10.9962ZM10 14.0001L9.13176 13.5039C8.9549 13.8134 8.95617 14.1937 9.13509 14.502C9.31401 14.8103 9.64353 15.0001 10 15.0001V14.0001ZM14 14.0001L14.9191 14.394C15.0516 14.085 15.0199 13.7302 14.8348 13.4496C14.6498 13.1689 14.3361 13.0001 14 13.0001V14.0001ZM11.5809 17.1061C11.3633 17.6138 11.5985 18.2016 12.1061 18.4192C12.6137 18.6368 13.2016 18.4016 13.4191 17.894L11.5809 17.1061ZM20 11.2362V19.889H22V11.2362H20ZM18 21.889H6V23.889H18V21.889ZM4 19.889V11.2362H2V19.889H4ZM4.67127 9.74135L10.6713 4.40801L9.34254 2.91319L3.34254 8.24653L4.67127 9.74135ZM13.3287 4.40801L19.3287 9.74135L20.6575 8.24653L14.6575 2.91319L13.3287 4.40801ZM10.6713 4.40801C11.429 3.73444 12.571 3.73444 13.3287 4.40801L14.6575 2.91319C13.1419 1.56604 10.8581 1.56604 9.34254 2.91319L10.6713 4.40801ZM6 21.889C4.89543 21.889 4 20.9935 4 19.889H2C2 22.0981 3.79086 23.889 6 23.889V21.889ZM20 19.889C20 20.9935 19.1046 21.889 18 21.889V23.889C20.2091 23.889 22 22.0981 22 19.889H20ZM22 11.2362C22 10.0936 21.5114 9.0056 20.6575 8.24653L19.3287 9.74135C19.7557 10.1209 20 10.6649 20 11.2362H22ZM4 11.2362C4 10.6649 4.2443 10.1209 4.67127 9.74135L3.34254 8.24653C2.48859 9.0056 2 10.0936 2 11.2362H4ZM11.1318 10.0039L9.13176 13.5039L10.8682 14.4962L12.8682 10.9962L11.1318 10.0039ZM10 15.0001H14V13.0001H10V15.0001ZM13.0809 13.6061L11.5809 17.1061L13.4191 17.894L14.9191 14.394L13.0809 13.6061Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default SmartHomeCharge;