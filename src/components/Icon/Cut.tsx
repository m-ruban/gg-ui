import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Cut: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.5063 8.44686C23.0068 8.21345 23.2234 7.61847 22.99 7.11793C22.7566 6.61739 22.1616 6.40084 21.6611 6.63424L22.5063 8.44686ZM21.6611 17.4592C22.1616 17.6926 22.7566 17.476 22.99 16.9755C23.2234 16.4749 23.0068 15.88 22.5063 15.6466L21.6611 17.4592ZM10.8746 16.6293C9.8243 14.3768 7.14689 13.4023 4.89446 14.4527L5.7397 16.2653C6.99105 15.6818 8.4785 16.2232 9.06201 17.4745L10.8746 16.6293ZM4.89446 14.4527C2.64203 15.503 1.66753 18.1804 2.71786 20.4328L4.53048 19.5876C3.94696 18.3363 4.48835 16.8488 5.7397 16.2653L4.89446 14.4527ZM2.71786 20.4328C3.76819 22.6853 6.4456 23.6598 8.69803 22.6094L7.85279 20.7968C6.60144 21.3803 5.11399 20.839 4.53048 19.5876L2.71786 20.4328ZM8.69803 22.6094C10.9505 21.5591 11.925 18.8817 10.8746 16.6293L9.06201 17.4745C9.64553 18.7259 9.10414 20.2133 7.85279 20.7968L8.69803 22.6094ZM5.28645 16.4766L22.5063 8.44686L21.6611 6.63424L4.44121 14.664L5.28645 16.4766ZM9.06201 6.6189C8.4785 7.87025 6.99105 8.41164 5.7397 7.82813L4.89446 9.64074C7.14689 10.6911 9.8243 9.71657 10.8746 7.46414L9.06201 6.6189ZM5.7397 7.82813C4.48835 7.24461 3.94696 5.75716 4.53048 4.50581L2.71786 3.66058C1.66754 5.91301 2.64203 8.59042 4.89446 9.64074L5.7397 7.82813ZM4.53048 4.50581C5.11399 3.25446 6.60144 2.71308 7.85279 3.29659L8.69803 1.48397C6.4456 0.433648 3.76819 1.40815 2.71786 3.66058L4.53048 4.50581ZM7.85279 3.29659C9.10414 3.8801 9.64553 5.36755 9.06201 6.6189L10.8746 7.46414C11.925 5.21171 10.9505 2.5343 8.69803 1.48397L7.85279 3.29659ZM4.44121 9.42942L21.6611 17.4592L22.5063 15.6466L5.28645 7.61681L4.44121 9.42942Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default Cut;
