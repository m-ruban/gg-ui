import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Plane: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0449 20.5701C17.1453 20.7375 17.3763 20.7659 17.5143 20.6279L19.1635 18.9787C19.2431 18.8991 19.2715 18.7816 19.2369 18.6745L16.5355 10.293L19.965 7.07574C20.8599 6.18085 21.6647 4.10853 20.7781 3.22195C19.8915 2.33537 17.9253 3.24629 17.0304 4.14119L13.707 7.46459L5.32555 4.76312C5.21842 4.72859 5.10098 4.75693 5.02139 4.83652L3.37212 6.48579C3.23412 6.62379 3.26255 6.85475 3.42991 6.95517L9.62237 10.6706C9.9013 10.838 9.94869 11.2229 9.71868 11.4529L6.63596 14.5357L4.43177 13.555C4.31832 13.5045 4.1855 13.5292 4.09769 13.617L2.53083 15.1838C2.30115 15.4135 2.34801 15.7978 2.62617 15.9655L5.99988 18.0001L8.0345 21.3739C8.20225 21.652 8.58654 21.6989 8.81622 21.4692L10.3831 19.9024C10.4709 19.8146 10.4955 19.6817 10.4451 19.5683L9.46439 17.3641L12.5471 14.2814C12.7771 14.0514 13.162 14.0987 13.3294 14.3777L17.0449 20.5701Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default Plane;
