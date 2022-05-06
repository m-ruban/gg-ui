import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const ArrowDownAlt2: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                style={{ transform: `scale(${scale})` }}
                d="M16 10L12 14L8 10M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default ArrowDownAlt2;
