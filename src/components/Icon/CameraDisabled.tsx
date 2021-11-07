import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const CameraDisabled: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.5 19C15.0523 19 15.5 18.5523 15.5 18C15.5 17.4477 15.0523 17 14.5 17V19ZM3 6.22495C3 5.67266 2.55228 5.22495 2 5.22495C1.44772 5.22495 1 5.67266 1 6.22495H3ZM9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7V5ZM1.68536 4.2718C1.28319 3.89328 0.650316 3.91246 0.2718 4.31464C-0.106716 4.71681 -0.0875384 5.34968 0.314635 5.7282L1.68536 4.2718ZM17.3146 21.7282C17.7168 22.1067 18.3497 22.0875 18.7282 21.6854C19.1067 21.2832 19.0875 20.6503 18.6854 20.2718L17.3146 21.7282ZM20.2133 7.05071L19.6398 6.23148L19.6398 6.23148L20.2133 7.05071ZM20.2133 16.9493L19.6398 17.7685L19.6398 17.7685L20.2133 16.9493ZM16.5735 13.1808C16.121 12.8641 15.4975 12.9741 15.1808 13.4265C14.8641 13.879 14.9741 14.5025 15.4265 14.8192L16.5735 13.1808ZM17.2288 9.13981L16.6554 8.32057L17.2288 9.13981ZM14.5 17H4.5V19H14.5V17ZM3 15.5V6.22495H1V15.5H3ZM9 7H13.5V5H9V7ZM4.5 17C3.67157 17 3 16.3284 3 15.5H1C1 17.433 2.567 19 4.5 19V17ZM13.5 7C14.3284 7 15 7.67157 15 8.5H17C17 6.567 15.433 5 13.5 5V7ZM0.314635 5.7282L17.3146 21.7282L18.6854 20.2718L1.68536 4.2718L0.314635 5.7282ZM19.6398 6.23148L16.6554 8.32057L17.8023 9.95904L20.7867 7.86994L19.6398 6.23148ZM20 7.46033V16.5397H22V7.46033H20ZM20.7867 16.1301L16.5735 13.1808L15.4265 14.8192L19.6398 17.7685L20.7867 16.1301ZM20 16.5397C20 16.1352 20.4553 15.8981 20.7867 16.1301L19.6398 17.7685C20.634 18.4644 22 17.7532 22 16.5397H20ZM20.7867 7.86994C20.4553 8.10192 20 7.86484 20 7.46033H22C22 6.24679 20.634 5.53556 19.6398 6.23148L20.7867 7.86994ZM15 8.5C15 9.94086 16.6219 10.7853 17.8023 9.95904L16.6554 8.32057C16.8005 8.21896 17 8.32281 17 8.5H15Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default CameraDisabled;
